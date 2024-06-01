import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'blog-details',
        loadChildren: () =>
          import('./blog-details/blog-details.module').then(
            (m) => m.BlogDetailsModule
          ),
      },
      {
        path: 'blog-grid',
        loadChildren: () =>
          import('./blog-grid/blog-grid.module').then((m) => m.BlogGridModule),
      },
      {
        path: 'blog-list',
        loadChildren: () =>
          import('./blog-list/blog-list.module').then((m) => m.BlogListModule),
      },
      {
        path: 'blog-masonry',
        loadChildren: () =>
          import('./blog-masonry/blog-masonry.module').then(
            (m) => m.BlogMasonryModule
          ),
      },
      {
        path: 'blog-modern',
        loadChildren: () =>
          import('./blog-modern/blog-modern.module').then(
            (m) => m.BlogModernModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
