import { Component } from '@angular/core';
import { blogMasonry } from 'src/app/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-blog-masonry',
  templateUrl: './blog-masonry.component.html',
  styleUrls: ['./blog-masonry.component.scss']
})
export class BlogMasonryComponent {
  public blogMasonry : blogMasonry[] = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.blogMasonry = this.DataService.blogMasonry;
    }


}
