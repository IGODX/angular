import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  user: User = new User("", "", 0, 0);
  name?: string;
  surname?: string;
  age?: number;
  isAdded: boolean = false;

  constructor(private httpService : HttpService) {}
  addUser() {
    this.httpService.postUser(this.user).subscribe((data : any) => this.isAdded = data);
  }
}
