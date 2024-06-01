import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogModernRoutingModule } from './blog-modern-routing.module';
import { BlogModernComponent } from './blog-modern.component';


@NgModule({
  declarations: [
    BlogModernComponent
  ],
  imports: [
    CommonModule,
    BlogModernRoutingModule
  ]
})
export class BlogModernModule { }
