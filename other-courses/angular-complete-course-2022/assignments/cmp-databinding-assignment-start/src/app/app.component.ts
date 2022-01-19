import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];
  onNewComponentCreated(data: number): void {
    if (data % 2 === 0) {
      this.evens.push(data)
    } else {
      this.odds.push(data)
    }
  }
}
