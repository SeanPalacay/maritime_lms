import { NgModule } from '@angular/core';
import { FeatherIconModule } from './feather.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountUpModule } from "ngx-countup";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BsDatepickerConfig, BsDatepickerModule, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { EditorModule } from 'primeng/editor';
import { InstructorSettingTabModule } from 'src/app/components/instructor/common/instructor-setting-tab/instructor-setting-tab.module';
import { InstructorSidebarModule } from 'src/app/components/instructor/common/instructor-sidebar/instructor-sidebar.module';
import { StudentSettingTabModule } from 'src/app/components/student/common/student-setting-tab/student-setting-tab.module';
import { StudentSidebarModule } from 'src/app/components/student/common/student-sidebar/student-sidebar.module';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    FeatherIconModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -10,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 10,
      "animationDuration": 1000,
      "clockwise": false,
      "startFromZero": false,
      "lazy": false,
      "outerStrokeLinecap":"square",
      "showSubtitle": false,
      "showTitle" : false,
      "showUnits" : false,
      "showBackground" : false
    }),
    MatSelectModule,
    MatFormFieldModule,
    CountUpModule,
    SlickCarouselModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatNativeDateModule,
    // MatDatepickerModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    MatIconModule,
    TooltipModule,
    CarouselModule,
    NgScrollbarModule,
    InstructorSidebarModule,
    StudentSidebarModule,
    EditorModule,
    InstructorSettingTabModule,
    StudentSettingTabModule,
    BsDatepickerModule
  ],
  exports: [
    FeatherIconModule,
    NgCircleProgressModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    CountUpModule,
    SlickCarouselModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatNativeDateModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    MatIconModule,
    TooltipModule,
    CarouselModule,
    NgScrollbarModule,
    InstructorSidebarModule,
    StudentSidebarModule,
    EditorModule,
    InstructorSettingTabModule,
    StudentSettingTabModule,
    BsDatepickerModule
  ],
  providers: [BsDatepickerConfig, DatePipe, BsDaterangepickerConfig],

})
export class SharedModule {}
