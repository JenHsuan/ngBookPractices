import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[ngBookIf]'
})
export class NgBookIfDirective {
  @Input() set ngBookIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

}
