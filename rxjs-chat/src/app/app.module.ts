import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatThreadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
