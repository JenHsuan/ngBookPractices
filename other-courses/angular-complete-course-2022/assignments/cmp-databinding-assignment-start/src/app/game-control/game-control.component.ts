import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timerId: any = null;
  counter = 0;
  @Output() newComponentCreated = new EventEmitter<number>();

  startInterval(): void {
    this.timerId = setInterval(() => {
      this.counter++;
      this.newComponentCreated.emit(this.counter);
    }, 1000)
  }

  stopInterval(): void {
    //this.counter = 0;
    clearInterval(this.timerId);
    this.timerId = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

