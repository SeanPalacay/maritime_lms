import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent  {
  last = '';
  public routes = routes;

  constructor(private router: Router) {
    this.last = this.router.url.split('/')[2]?.replace('-', ' '); 
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.last = data.url.split('/')[2]?.replace('-', ' ');
      }
    });
  }


}
