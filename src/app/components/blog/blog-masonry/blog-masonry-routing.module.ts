import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogMasonryComponent } from './blog-masonry.component';

const routes: Routes = [{ path: '', component: BlogMasonryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogMasonryRoutingModule { }
