import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getSkillsList(): Observable<string[]> {
    return this.http.get("assets/skills.json").pipe(map((data: any) => {
      let skillsList = data["skillsList"];
      return skillsList.map((item: any) => item);
    }));
  }
}
