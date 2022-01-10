import { Component, Directive } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopDirective {
    constructor() {
        console.log('Directive bound')
    }
}

@Component({
    selector: 'app-demo-demo',
    template: `
    <div class="ui message" popup>
        <div class="header">
            Learning Directives
        </div>
        <p>
            This should use Popup directive
        </p>
    </div>
    `
})
export class PopupDemoComponent {

}
