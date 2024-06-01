import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { HomeData } from './components/data';
import { routes } from 'src/app/shared/service/routes/routes';
import {
  universitiesCompanies,
  category,
  Featured_Courses,
  trending_Courses,
  feature_instructors,
  real_reviews,
  blog,
} from 'src/app/models/model';
interface data {
  favourite: boolean;
  active?: boolean;
}
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component implements OnInit {
  public routes = routes;
  selected = '1';
  public universitiesCompanies: universitiesCompanies[] = [];
  public Category: category[] = [];
  public Featured_Courses: Featured_Courses[] = [];
  public trending_Courses: trending_Courses[] = [];
  public feature_instructors: feature_instructors[] = [];
  public real_reviews: real_reviews[] = [];
  public blog: blog[] = [];
  constructor(
    private DataService: DataService,
    public router: Router,
    public data: HomeData
  ) {
    this.universitiesCompanies = this.DataService.universitiesCompanies;
    this.Category = this.data.Category;
    this.Featured_Courses = this.data.Featured_Courses;
    this.trending_Courses = this.data.trending_Courses;
    this.feature_instructors = this.data.feature_instructors;
    this.real_reviews = this.data.real_reviews;
    this.blog = this.data.blog;
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  customReview: OwlOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
  public universitiesCompaniesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  toggleClass(slide: data) {
    slide.favourite = !slide.favourite;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
}
