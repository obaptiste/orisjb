import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import {ImagesListComponent } from './image-list/image-list.component'
import { ImagesService } from './images.service'
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

import { AppRoutingModule } from "./app-routing.module";
import { MinValidatorDirective } from './min-validator.directive';
import { MaxValidatorDirective } from './max-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    ImagesListComponent,
    PersonDetailsComponent,
    ImageDetailsComponent,
    MinValidatorDirective,
    MaxValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [PeopleService, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
