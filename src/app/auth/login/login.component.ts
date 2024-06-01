import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { welcomeLogin } from 'src/app/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public routes = routes;
  password= 'password';
  show = true;

  public welcomeLogin: welcomeLogin[] = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };

  constructor(private DataService: DataService, public router: Router) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }



  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }
  directIndex() {
    this.router.navigate(['/instructor/instructor-dashboard']);
  }
}
