import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hooks-demo',
  templateUrl: './all-hooks-demo.component.html'
})
export class AllHooksDemoComponent implements OnInit {
  displayAfter = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAfters(): void {
    this.displayAfter = !this.displayAfter;
  }
}
