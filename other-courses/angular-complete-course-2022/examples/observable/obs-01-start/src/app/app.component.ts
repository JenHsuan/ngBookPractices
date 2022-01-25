import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showActivate = false;
  private subscription: Subscription;
  constructor(private userService: UserService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe((data:boolean) => {
      this.showActivate = data;
    })
  }
}
