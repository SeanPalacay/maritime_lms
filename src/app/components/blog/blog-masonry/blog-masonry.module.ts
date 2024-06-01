import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogMasonryRoutingModule } from './blog-masonry-routing.module';
import { BlogMasonryComponent } from './blog-masonry.component';


@NgModule({
  declarations: [
    BlogMasonryComponent
  ],
  imports: [
    CommonModule,
    BlogMasonryRoutingModule
  ]
})
export class BlogMasonryModule { }
