import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import * as AOS from 'aos';
import { routes } from 'src/app/shared/service/routes/routes';
import {
  topCategories,
  trendingCourses,
  featuredInstructor,
  latestBlogs,
  featuredCourses,
  career,
  universitiesCompanies,
  testimonial,
} from 'src/app/models/model';
interface data {
  active?: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public routes = routes;
  public topCategories: topCategories[] = [];
  public trendingCourses: trendingCourses[] = [];
  public featuredInstructor: featuredInstructor[] = [];
  public latestBlogs: latestBlogs[] = [];
  public featuredCourses: featuredCourses[] = [];
  public career: career[] = [];
  public universitiesCompanies: universitiesCompanies[] = [];
  public testimonial: testimonial[] = [];
  selected = '1';
  public topCategoriesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 3,
      },
    },
  };
  public trendingCoursesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public featuredInstructorOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public latestBlogsOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
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
  public slideConfig = {
    lazyLoad: 'ondemand',
    infinite: true,
  };

  constructor(private DataService: DataService, public router: Router) {
    this.topCategories = this.DataService.topCategories;
    this.trendingCourses = this.DataService.trendingCourses;
    this.featuredInstructor = this.DataService.featuredInstructor;
    this.latestBlogs = this.DataService.latestBlogs;
    this.featuredCourses = this.DataService.featuredCourses;
    this.career = this.DataService.career;
    this.universitiesCompanies = this.DataService.universitiesCompanies;
    this.testimonial = this.DataService.testimonial;
  }

  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide: data) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
}
