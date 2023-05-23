import { Directive, ElementRef, OnInit } from '@angular/core';

// the brace brackets [] in the selector means that thos directive can be used as a attribute
@Directive({ 
    selector: '[appBasicHighlight]' 
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
