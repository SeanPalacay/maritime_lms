import { Component } from '@angular/core';
import { blogGridRecentPosts, blogList } from 'src/app/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent  {
  public blogListRecentPosts : blogGridRecentPosts []= [];
  public routes = routes;
  public blogList : blogList[] = [];

  constructor(private DataService: DataService) {
    this.blogListRecentPosts = this.DataService.blogListRecentPosts;
    this.blogList = this.DataService.blogList;
    }

 

}
