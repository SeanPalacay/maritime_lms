import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    Home2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class Home2Module { }
