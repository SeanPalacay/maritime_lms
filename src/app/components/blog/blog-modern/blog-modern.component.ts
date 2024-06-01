import { Component } from '@angular/core';
import { blogModern } from 'src/app/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-blog-modern',
  templateUrl: './blog-modern.component.html',
  styleUrls: ['./blog-modern.component.scss']
})
export class BlogModernComponent  {
  public routes = routes;
  public blogModern : blogModern[] = [];

  constructor(private DataService: DataService) {
    this.blogModern = this.DataService.blogModern;
    }



}
