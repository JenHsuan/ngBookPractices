import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChangeTo(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
  constructor() { }
}
