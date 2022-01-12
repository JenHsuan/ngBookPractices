import { Component, OnInit } from '@angular/core';
import { Observable, timer, take } from 'rxjs';

@Component({
  selector: 'app-observerable-obseravable-demo',
  template:
  `
  <app-observerable-chnage-detection [items]="itemObserverable"></app-observerable-chnage-detection>
  `
})
export class ObserverableObseravableDemoComponent implements OnInit {
  itemObserverable: Observable<number>
  constructor() { }

  ngOnInit(): void {
    this.itemObserverable = timer(100, 100).pipe(
      take(101)
    )
  }

}
