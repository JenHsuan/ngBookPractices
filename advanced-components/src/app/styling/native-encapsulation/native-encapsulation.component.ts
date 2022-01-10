import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  template: `
  <h4 class="ui horizontal divider header">
    Native encapsulation example
  </h4>
  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `,
  styles: [
    `
    .highlight{
      border: 2px solid black;
      border-radius: 3px;
      text-align: center;
      margin-bottom: 20px
    }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NativeEncapsulationComponent {}
