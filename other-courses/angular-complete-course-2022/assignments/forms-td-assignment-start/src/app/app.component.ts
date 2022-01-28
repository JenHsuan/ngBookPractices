import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

enum SubscriptionType {
  Basic = 'Basic',
  Advanced = 'Advanced',
  Pro = 'Pro'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = SubscriptionType.Advanced;
  subscriptionOptions = Object.keys(SubscriptionType)
  submitted = false

  constructor() {
    console.log(this.subscriptionOptions)
  }
  onSubmit() {
    console.log(this.signupForm)
    this.submitted = true
  }
}
