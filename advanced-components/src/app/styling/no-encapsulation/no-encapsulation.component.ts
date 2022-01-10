import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
  <h4 class="ui horizontal divider header">
    No encapsulation example
  </h4>
  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `,
  styles: [
    `
    .highlight{
      border: 2px dashed red;
      text-align: center;
      margin-bottom: 20px
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {
}
