import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiurl = "https://jsonplaceholder.typicode.com";

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiurl}/postsaa`)
      .pipe(
        map(res => res),
      );
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiurl}/users`)
    .pipe(
      map(res => res),
    );
  }

}
