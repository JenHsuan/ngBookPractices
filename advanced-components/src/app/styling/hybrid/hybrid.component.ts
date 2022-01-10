import { Component } from '@angular/core';

@Component({
  selector: 'app-hybrid',
  template: `
  <style>
  .highlight{
    border: 2px solid red;
    background-color: blue;
    text-align: center;
    margin-bottom: 20px
  }
  </style>
  <h4 class="ui horizontal divider header">
    Hybrid style example
  </h4>
  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `,
  styleUrls: ['./hybrid.component.scss'],
  styles: [
    `
    .highlight{
      border: 2px solid red;
      background-color: yellow;
      text-align: center;
      margin-bottom: 20px
    }
    `
  ]
})
export class HybridComponent {
}
