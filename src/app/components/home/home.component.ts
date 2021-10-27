import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post> = [
    {Id: '8764578', Title: 'Title', Content: 'Some Content', Author: 'Me', CreatedOn: null, ImgUrl: ''},
    {Id: '432543', Title: 'Title 1', Content: 'Some Content 1', Author: 'Me', CreatedOn: null, ImgUrl: ''}
  ];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe(response => {
      response.forEach(element => {
        console.log(element);
        const c = {
          Id: element.id,
          Title: element.Title,
          Content: element.description,
          ImgUrl: element.imgUrl !== undefined ? element.imgUrl : './assets/images/wale.png'
        };
          this.posts.push(c as Post);
        });
        // this.loading = false;
        // this.setSearchStatus();
      },
      error => {
        //this.loading = false;
        console.log(error);
      },
      () =>{ }
    );
  }

}
