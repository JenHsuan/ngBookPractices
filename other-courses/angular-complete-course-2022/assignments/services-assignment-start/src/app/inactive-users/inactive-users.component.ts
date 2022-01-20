import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private userSerivce: UserService) {
    this.users = this.userSerivce.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userSerivce.onSetToActive(id);
  }
}
