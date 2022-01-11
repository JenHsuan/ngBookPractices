import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  template: `
  <div class="ui label">
    <i class="cubes icon"></i> Init/Destroy
  </div>
  `
})
export class OnInitComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('On destroy');
  }

  ngOnInit(): void {
    console.log('On init');
  }

}
