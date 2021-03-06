import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://test1-angular-heroku.herokuapp.com/';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url + 'view.php')
      .pipe(map((data) => data));
  }

  createPost(data: Omit<Post, 'postId' | 'authorId'>, authorId){
    return this.http
      .post(this.url + 'create.php', { data, authorId })
      .pipe(map((res) => res));
  }
}
