import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: Subject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(newUser: User) {
    this.currentUser.next(newUser);
  }

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [
  UsersService
];
