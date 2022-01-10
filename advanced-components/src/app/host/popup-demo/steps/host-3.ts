import { Directive, ElementRef, Component, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopDirective3 {
    @Input() message?: string;
    constructor(_elementRef: ElementRef) {
        console.log(_elementRef)
    }

    @HostListener('click') displayMessage(): void {
        alert(this.message);
    }
}

@Component({
    selector: 'app-demo-demo3',
    template: `
    <div class="ui message" popup message="clicked the alarm icon">
        <div class="header">
            Learning Directives
        </div>
        <p>
            This should use Popup directive
        </p>
    </div>

    <i class="alarm icon" popup message="click the alarm icon"></i>
    `
})
export class PopupDemoComponent3 {

}

