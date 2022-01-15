import { Component, OnInit } from '@angular/core';
//import { HybridComponent } from '../../styling/hybrid/hybrid.component'
@Component({
  selector: 'app-content-tabs-demo',
  templateUrl: './content-tabs-demo.component.html',
  styles: [
    `
    .link {
      position: absolute;
      bottom: 100px;
      right: 100px;
    }
    `
  ]
})
export class ContentTabsDemoComponent implements OnInit {
  tabs: any;
  constructor() { }

  ngOnInit(): void {
    // this.tabs = [
    //   { title: 'About', content: HybridComponent},
    //   { title: 'Blog', content: 'This is our blog'},
    //   { title: 'Contact us', content: 'Contact us here'}
    // ]
  }

}
