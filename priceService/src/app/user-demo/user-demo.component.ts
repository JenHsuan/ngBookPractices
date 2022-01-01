import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})

export class UserDemoComponent {
  //userService: UserService;
  userName?: string;
  constructor(private userService: UserService) {
    //const injector: any = ReflectiveInjector.resolveAndCreate([UserService])
    //this.userService = injector.get(UserService);
  }
  signIn(): void{
    this.userService.setUser({ name: 'Sean' })
    this.userName = this.userService.getUser().name;
    console.log(this.userName)
  }
}
