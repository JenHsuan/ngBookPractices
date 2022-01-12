import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-on-push-demo',
  template:
  `
  <div class="ui page grid">
    <div class="two column row">
    <div class="column area">
      <app-default-change-detection [profile]="profile1">
      </app-default-change-detection>
    </div>
    <div class="column area">
      <app-default-change-detection [profile]="profile2">
      </app-default-change-detection>
    </div>
    </div>
  </div>
  `
})
export class OnPushDemoComponent implements OnInit {
  profile1: Profile = new Profile('Sean', '1');
  profile2: Profile = new Profile('Sean', '2');;
  constructor() { }

  ngOnInit(): void {
  }

}
