import { Injectable } from '@angular/core';
import {  Post } from  '../models/post';
import {  AngularFirestore } from  '@angular/fire/firestore';
import { map } from  'rxjs/operators';
import {  Observable } from  'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers =  new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Methods', 'GET')
      .set('Access-Control-Allow-Origin', '*');
   }

  // updatePost(postId: string, post: Post) {
  //   const putData = JSON.parse(JSON.stringify(post));
  //   return this.db.doc('blogs/' + postId).update(putData);
  // }

  // createPost(post: Post) {
  //    const postData = JSON.parse(JSON.stringify(post));
  //    return this.db.collection('blogs').add(postData);
  // }

  getAllArticles(): Observable<any> {
    return this.http.get('https://localhost:44330/api/Elzi',  {headers: this.headers});
  }

  // getPostbyId(id: string): Observable<Post> {
  //   const blogDetails = this.db.doc<Post>('blogs/' + id).valueChanges();
  //   return blogDetails;
  // }

  // deletePost(postId: string) {
  //   return this.db.doc('blogs/' + postId).delete();
  // }

}
