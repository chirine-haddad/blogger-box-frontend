// post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../data/post'; 
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:1234/v1/posts'; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    console.log('Fetching posts...'); 
     return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(newPost: Post): Observable<any> {
    return this.http.post(this.apiUrl, newPost);
  }
}