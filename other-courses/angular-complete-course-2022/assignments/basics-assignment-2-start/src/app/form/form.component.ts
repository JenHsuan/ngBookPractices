import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template:
    `
    <label for="username">Name: </label>
    <input type="text" class="username" [(ngModel)]="username">
    <button
      [disabled]="!hasUserName()"
      (click)="resetUserName()">Reset</button>
    <p *ngIf="hasUserName()">Hello! {{ username }}</p>
    `,
  styles: [`
  .username {
    margin: 0 5px;
  }
  `]
})
export class FormComponent {
  username = '';
  constructor() {
    this.hasUserName();
  }

  resetUserName(): void {
    this.username = '';
  }

  hasUserName(): boolean {
    return this.username.length !== 0
  }
}
