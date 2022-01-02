import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoreHttpRequestComponent } from './more-http-request/more-http-request.component';
import { MoreHttpRequestModule } from './more-http-request/more-http-request.module';
@NgModule({
  declarations: [
    AppComponent,
    MoreHttpRequestComponent
  ],
  imports: [
    BrowserModule,
    MoreHttpRequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
