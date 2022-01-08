import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appStoreInjectable } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...appStoreInjectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
