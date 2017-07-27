import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ImagesService } from "../images.service";

@Component({
  selector: 'app-images-list',
  template: `

  <section *ngIf="isLoading && !errorMessage">
  Loading our hyperdrives!!! Retrieving data...
  </section>
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let image of images">
      <a [routerLink]="['/images', image.id]">
        {{image.name}} 
      </a>
    </li>
  </ul>
  <!-- HERE: added this error message -->
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `,
  styleUrls: ['./image-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  image: Image[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private imagesService: ImagesService) { }

  ngOnInit(){
    this.imagesService
      .getAll()
      .subscribe(
         /* happy path */ p => this.image = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
  }

}
