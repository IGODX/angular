import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User = new User("", "", 0, 0);
  users: User[] = [];
  selectedUserId?: number;
  isEdited: boolean = false;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe((data : any) => this.users = data);
  }
  selectUser() {
    this.isEdited = false;
    const selectedUser = this.users.find(user => user.id == this.selectedUserId);
    if (selectedUser == null) {
      this.user = new User("", "", 0, 0);
    }
    else {
      this.user.id = selectedUser.id;
      this.user.name = selectedUser.name;
      this.user.surname = selectedUser.surname;
      this.user.age = selectedUser.age;
    }
  }
  editUser() {
    this.httpService.putUser(this.user).subscribe((data: any) => {
      this.isEdited = data;
      let editedUser = this.users.find(user => user.id == this.selectedUserId);
      if (editedUser != null) {
        editedUser.name = this.user.name;
        editedUser.surname = this.user.surname;
        editedUser.age = this.user.age;
      }
    }, (error: any) => {
      // Handle error here
      console.error('An error occurred:', error)
    });
  }

}
