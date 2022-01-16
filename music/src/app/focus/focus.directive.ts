import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[appFocus]'
})
export class FocusDirective implements AfterViewInit {
  @Input('appFocus') public focused = false;
  constructor(public element: ElementRef<HTMLElement>) { }
  ngAfterViewInit(): void {
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

}
