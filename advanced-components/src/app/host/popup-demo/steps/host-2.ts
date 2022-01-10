import { Directive, ElementRef, Component } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopDirective2 {
    constructor(_elementRef: ElementRef) {
        console.log(_elementRef)
    }
}

@Component({
    selector: 'app-demo-demo2',
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
export class PopupDemoComponent2 {

}

