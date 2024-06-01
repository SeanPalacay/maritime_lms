import { Component } from '@angular/core';
import { blogDetailsRecentPosts } from 'src/app/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent  {
  public blogDetailsRecentPosts : blogDetailsRecentPosts[] = [];
  public routes = routes;
  constructor(private DataService: DataService) {
    this.blogDetailsRecentPosts = this.DataService.blogDetailsRecentPosts;
    }
 
}
