import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Image } from './image';

// const PEOPLE : Image[] = [
//       {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
//       {id: 2, name: 'Darth Vader', height: 200, weight: 100},
//       {id: 3, name: 'Han Solo', height: 185, weight: 85},
//     ];

@Injectable()
export class ImagesService{
  //private baseUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json';
  private baseUrl: string = '../assets/data.json';

  constructor(private http : Http){
  }

  getAll(): Observable<Image[]>{
    let images$ = this.http
      .get(`${this.baseUrl}`, { headers: this.getHeaders()})
      .map(mapImages)
      .catch(handleError);
      console.log(images$);
      return images$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Image> {
    let image$ = this.http
      .get(`${this.baseUrl}`, {headers: this.getHeaders()})
      .map(mapImage)
      .catch(handleError);
      return image$;
  }

  save(image: Image) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't 
    // is read-only. But it would look like this:
    return this
      .http
      .put(`${this.baseUrl}`, 
            JSON.stringify(image), 
            {headers: this.getHeaders()});
  }

}


function mapImages(response:Response): Image[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toImage)
}

function toImage(r:any): Image{
  let image = <Image>({
    title: r.title,
    link: r.link,
    media: r.media,
    description: r.description
  });
  console.log('Parsed image:', image);
  return image;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(imageData:any){
  let extractedId = imageData.url.replace('https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json','').replace('/','');
  return parseInt(extractedId);
}

function mapImage(response:Response): Image{
   // toPerson looks just like in the previous example
   return toImage(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

