import { Directive, ElementRef, Component, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[popup]',
    exportAs: 'popup'
})
export class PopDirective4 {
    @Input() message?: string;
    constructor(_elementRef: ElementRef) {
        console.log(_elementRef)
    }

    @HostListener('click') displayMessage(): void {
        alert(this.message);
    }
}

@Component({
    selector: 'app-demo-demo4',
    template: `
    <div class="ui message" popup #popup1="popup" message="clicked the alarm icon">
        <div class="header">
            Learning Directives
        </div>
        <p>
            This should use Popup directive
        </p>
    </div>

    <i class="alarm icon" popup #popup2="popup" message="click the alarm icon"></i>

    <div style="margin-top: 20px;">
        <button (click)="popup1.displayMessage()" class="ui button">
            Display popup for message element
        </button>
        <button (click)="popup2.displayMessage()" class="ui button">
            Display popup for alarm element
        </button>
    </div>
    `
})
export class PopupDemoComponent4 {

}

