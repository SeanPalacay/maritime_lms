import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    Home3Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home3RoutingModule,
    FeatherIconModule,
    SharedModule,
    SwiperModule
  ]
})
export class Home3Module { }
