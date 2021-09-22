import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post> = [
    {postId: '8764578', title: 'Title', content: 'Some content', author: 'Me', createdDate: Date.now()},
    {postId: '432543', title: 'Title 1', content: 'Some content 1', author: 'Me', createdDate: Date.now()},
    {postId: '78769', title: 'Title 2', content: 'Some content 2', author: 'Me', createdDate: Date.now()},
    {postId: '8764578', title: 'Title 3', content: 'Some content 3', author: 'Me', createdDate: Date.now()},
    {postId: '432543', title: 'Title 4', content: 'Some content 4', author: 'Me', createdDate: Date.now()},
    {postId: '78769', title: 'Title 5', content: 'Some content 5', author: 'Me', createdDate: Date.now()}
  ];

  constructor() { }

  ngOnInit() {
  }

}
