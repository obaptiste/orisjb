import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from "./people-list/people-list.component";
import { ImagesListComponent } from "./image-list/image-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { ImageDetailsComponent } from "./image-details/image-details.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id', 
    component: PersonDetailsComponent 
  },
  {
    path: 'images', 
    component: ImagesListComponent 
  },
  {
    path: 'images/:id', 
    component: ImageDetailsComponent 
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
