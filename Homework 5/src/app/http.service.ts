import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  postUser(user: User) {
    return this.http.post("http://localhost:3000/users", user);
  }
  getUsers(){
    return this.http.get("http://localhost:3000/users");
  }
  getUser(id: number){
    return this.http.get(`http://localhost:3000/users/${id}`);
  }
  deleteUser(user: User){
    return this.http.delete(`http://localhost:3000/users/${user.id}`);
  }
  putUser(user: User){
    return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  }
}
