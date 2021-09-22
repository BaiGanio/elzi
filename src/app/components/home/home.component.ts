import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post> = [{postId: '8764578', title: 'Title', content: 'Some content', author: 'Me', createdDate: Date.now()}];

  constructor() { }

  ngOnInit() {
  }

}
