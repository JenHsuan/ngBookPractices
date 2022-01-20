import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounters: number = 0;
  inactiveCounters: number = 0;
  constructor() { }

  IncreaseCounter(isActive: boolean): void {
    if (isActive) {
      this.activeCounters++;
    } else {
      this.inactiveCounters++;
    }
  }
}
