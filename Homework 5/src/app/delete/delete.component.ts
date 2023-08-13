import { Component } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  user: User = new User("", "", 0, 0);
  users: User[] = [];
  selectedUserId?: number;
  isDeleted: boolean = false;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe((data : any) => this.users = data);
  }
  deleteUser() {
    let user = new User("", "", 0, this.selectedUserId);
    if (this.selectedUserId != 0 ) {
      console.log(this.selectedUserId)
      this.httpService.deleteUser(user).subscribe((data: any) => {
        this.isDeleted = data;
        const index = this.users.findIndex(user => user.id == this.selectedUserId);
        this.users.splice(index, 1);
        this.selectedUserId = 0;
      });
    }
  }
}
