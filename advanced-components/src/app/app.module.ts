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
import { CommentsListComponent } from './lifecycle/differs/comments-list/comments-list.component';
import { DiffersDemoComponent } from './lifecycle/differs/differs-demo/differs-demo.component';
import { AllHooksComponent } from './lifecycle/all-hooks/all-hooks/all-hooks.component';
import { AllHooksDemoComponent } from './lifecycle/all-hooks/all-hooks-demo/all-hooks-demo.component';
import { NgBookIfDirective } from './templates/ng-book-if/ng-book-if.directive';
import { NgBookIfDemoComponent } from './templates/ng-book-if-demo/ng-book-if-demo.component';
import { NgBookForDemoComponent } from './templates/ng-book-for-demo/ng-book-for-demo.component';
import { NgBookForDirective } from './templates/ng-book-for/ng-book-for.directive';
import { DefaultChangeDetectionComponent } from './change-detection/on-push-demo/default-change-detection/default-change-detection.component';
import { FormsModule } from '@angular/forms';
import { OnPushDemoComponent } from './change-detection/on-push-demo/on-push-demo/on-push-demo.component';
import { ObserverableChnageDetectionComponent } from './change-detection/observerableDemo/observerable-chnage-detection/observerable-chnage-detection.component';
import { ObserverableObseravableDemoComponent } from './change-detection/observerableDemo/observerable-obseravable-demo/observerable-obseravable-demo.component';

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
    CommentComponent,
    CommentsListComponent,
    DiffersDemoComponent,
    AllHooksComponent,
    AllHooksDemoComponent,
    NgBookIfDirective,
    NgBookIfDemoComponent,
    NgBookForDemoComponent,
    NgBookForDirective,
    DefaultChangeDetectionComponent,
    OnPushDemoComponent,
    ObserverableChnageDetectionComponent,
    ObserverableObseravableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
