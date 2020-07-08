import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://test2-angular-heroku.herokuapp.com/testheroku/';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url + 'view.php')
      .pipe(map((data) => data));
  }
}