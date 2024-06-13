// post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../data/post'; // Assurez-vous d'importer correctement votre modèle Post

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:1234/v1/posts'; // Remplacez par votre URL API

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    console.log('Fetching posts...'); // Ajoutez un log pour savoir quand la méthode est appelée
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(newPost: Post): Observable<any> {
    return this.http.post(this.apiUrl, newPost);
  }
}


