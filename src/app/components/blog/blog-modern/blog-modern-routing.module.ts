import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModernComponent } from './blog-modern.component';

const routes: Routes = [{ path: '', component: BlogModernComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogModernRoutingModule { }
