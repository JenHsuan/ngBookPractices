import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template:
  `
  <button class="secret-btn"
          (click)="toggleDetail()">Display Details</button>
  <div class="secret-container"
       *ngIf="showDetail">
    <p class="secret">My secret</p>
    <ul>
      <li *ngFor="let item of timeStamps; let i = index" [ngClass]="{highlight: i > 3}">{{ item }}</li>
    </ul>
  </div>
  `,
  styles: [
    `
    .highlight {
      backgroun-color: blue;
      color: white;
    }
    .secret-btn {
      display: block;
      margin: 0 auto;
    }
    .secret {
      font-weight: bold;
      text-align: center;
    }
    `
  ]
})
export class DetailComponent implements OnInit {
  showDetail = false;
  timeStamps: Array<string>
  constructor() {
    this.timeStamps = [];
  }

  ngOnInit(): void {
  }

  logClick(): void {
    let d = new Date();
    this.timeStamps.push(
      (d.getMonth() + 1).toString() + "/" +
      d.getDate().toString() + "-" +
      d.getHours().toString() + ":" +
      d.getMinutes().toString() + ":" +
      d.getSeconds().toString()
    )
  }

  shouldHighlight(): boolean {
    return this.timeStamps.length > 3;
  }
  toggleDetail(): boolean {
    this.logClick();
    this.showDetail = !this.showDetail;
    return this.showDetail;
  }
}
