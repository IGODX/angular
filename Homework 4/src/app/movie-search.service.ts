import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

   private apiKey = '51ea6e10';

  constructor(private http: HttpClient) {}

  getMovieInfo(title: string): Observable<any> {
    const params = new HttpParams().set('apikey', this.apiKey).set('t', title);
    return this.http.get('http://www.omdbapi.com/', { params });
  }

}
