import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';
import { ContentTabComponent } from '../content-tab/content-tab.component';
@Component({
  selector: 'tabset',
  templateUrl: './content-tabset.component.html'
})
export class ContentTabsetComponent implements AfterContentInit {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent> | undefined;

  constructor() { }
  ngAfterContentInit(): void{
    (this as any).tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs?.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
