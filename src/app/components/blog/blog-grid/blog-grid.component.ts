import { Component} from '@angular/core';
import { blogGrid, blogGridRecentPosts } from 'src/app/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent  {
  public blogGrid : blogGrid[] = [];
  public routes = routes;
  public blogGridRecentPosts : blogGridRecentPosts[] = [];

  constructor(private DataService: DataService) {
    this.blogGrid = this.DataService.blogGrid;
    this.blogGridRecentPosts = this.DataService.blogGridRecentPosts;
    }

 
}
