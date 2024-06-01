import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
} from 'swiper';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { HomeData } from './components/data';
import { routes } from 'src/app/shared/service/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  counter,
  favourite,
  swiper,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tab6,
  tab7,
  trending_course,
} from 'src/app/models/model';
import { CommonService } from 'src/app/shared/service/common/common.service';
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Scrollbar]);
interface data {
  active?: boolean;
}
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Home3Component implements OnInit, OnDestroy {
  selected = '1';
  public counter: counter[] = [];
  public favourite: favourite[] = [];
  public tab1: tab1[] = [];
  public tab2: tab2[] = [];
  public tab3: tab3[] = [];
  public tab4: tab4[] = [];
  public tab5: tab5[] = [];
  public tab6: tab6[] = [];
  public tab7: tab7[] = [];
  public trending_course: trending_course[] = [];
  public swiper: swiper[] = [];
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  constructor(
    private common: CommonService,
    public router: Router,
    private data: HomeData,
    private renderer: Renderer2
  ) {
    this.counter = this.data.counter;
    this.favourite = this.data.favourite;
    this.tab1 = this.data.tab1;
    this.tab2 = this.data.tab2;
    this.tab3 = this.data.tab3;
    this.tab4 = this.data.tab4;
    this.tab5 = this.data.tab5;
    this.tab6 = this.data.tab6;
    this.tab7 = this.data.tab7;
    this.trending_course = this.data.trending_course;
    this.swiper = this.data.swiper;
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    if (this.base == 'home-three') {
      this.renderer.addClass(document.body, 'select-home-three');
    }
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  public courseOption: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 5,
      },
    },
  };
  public trendingOption: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public leadingOption: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: false,
    autoplay: false,
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
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
  toggleClass(slide: data) {
    slide.active = !slide.active;
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'select-home-three');
  }
  config: SwiperOptions = {
    effect: 'coverflow',
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    // spaceBetween: 100,
    speed: 400,
    navigation: {
      prevEl: '.slide-prev-btn',
      nextEl: '.slide-next-btn',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    // scrollbar: { draggable: true },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: true,
    },
  };
}
