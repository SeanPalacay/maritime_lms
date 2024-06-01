import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home4RoutingModule } from './home4-routing.module';
import { Home4Component } from './home4.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    Home4Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home4RoutingModule,
    SlickCarouselModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class Home4Module { }
