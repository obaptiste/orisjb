import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ImagesService } from "../images.service";
import { Image } from "../image";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styles: []
})
export class ImageDetailsComponent implements OnInit, OnDestroy {
  tags: string[] = ['space', 'bounty hunter', 'sith lord'];
  image: Image;
  sub:any;

  constructor(private route: ActivatedRoute,
              private imagesService: ImagesService,
              private router: Router) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting image with id: ', id);
      this.imagesService
        .get(id)
        .subscribe(p => this.image = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoImagesList(){
    let link = ['/images'];
    this.router.navigate(link);
  }

  savePersonDetails(){
      this.imagesService
          .save(this.image)
          .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.image)}`));
  }

  /* 
  //alternatively use:
  gotoPeoplesList(){
      window.history.back();
  }
  */

}
