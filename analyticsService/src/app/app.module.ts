import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';
@NgModule({
  declarations: [
    AppComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    AnalyticsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
