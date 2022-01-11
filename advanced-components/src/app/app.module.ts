import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineStyleComponent } from './styling/inline-style/inline-style.component';
import { ExternalStyleComponent } from './styling/external-style/external-style.component';
import { NativeEncapsulationComponent } from './styling/native-encapsulation/native-encapsulation.component';
import { NoEncapsulationComponent } from './styling/no-encapsulation/no-encapsulation.component';
import { HybridComponent } from './styling/hybrid/hybrid.component';
import { PopupDemoComponent, PopDirective } from './host/popup-demo/steps/host-1';
import { PopupDemoComponent2, PopDirective2 } from './host/popup-demo/steps/host-2';
import { PopupDemoComponent3, PopDirective3 } from './host/popup-demo/steps/host-3';
import { PopupDemoComponent4, PopDirective4 } from './host/popup-demo/steps/host-4';
import { MessageComponent } from './content-projection/message/message.component';
import { ContentProjectionComponent } from './content-projection/content-projection/content-projection.component';
import { ContentTabsetComponent } from './tabs/content-tabset/content-tabset.component';
import { ContentTabComponent } from './tabs/content-tab/content-tab.component';
import { ContentTabsDemoComponent } from './tabs/content-tabs-demo/content-tabs-demo.component';
import { OnInitComponent } from './lifecycle/on-init/on-init.component';
import { OnInitDemoComponent } from './lifecycle/on-init-demo/on-init-demo.component';
import { OnChangesComponent } from './lifecycle/on-changes/on-changes.component';
import { OnChangesDemoComponent } from './lifecycle/on-changes-demo/on-changes-demo.component';
import { CommentComponent } from './lifecycle/differs/comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent,
    HybridComponent,
    PopupDemoComponent,
    PopDirective,
    PopupDemoComponent2,
    PopDirective2,
    PopupDemoComponent3,
    PopDirective3,
    PopupDemoComponent4,
    PopDirective4,
    MessageComponent,
    ContentProjectionComponent,
    ContentTabsetComponent,
    ContentTabComponent,
    ContentTabsDemoComponent,
    OnInitComponent,
    OnInitDemoComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
