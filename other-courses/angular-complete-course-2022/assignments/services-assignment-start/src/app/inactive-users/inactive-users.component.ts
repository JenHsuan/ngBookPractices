import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userSerivce: UserService) {}
  ngOnInit(): void {
    this.users = this.userSerivce.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userSerivce.onSetToActive(id);
  }
}
