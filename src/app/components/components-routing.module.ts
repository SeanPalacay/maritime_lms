import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'instructor',
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home-list/home/home.module').then((m) => m.HomeModule),
      },
      { 
        path: 'home-two', 
        loadChildren: () => import('./home-list/home2/home2.module').then(m => m.Home2Module) 
      },
      { 
        path: 'home-three', 
        loadChildren: () => import('./home-list/home3/home3.module').then(m => m.Home3Module) 
      },
      { 
        path: 'home-four', 
        loadChildren: () => import('./home-list/home4/home4.module').then(m => m.Home4Module) 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
