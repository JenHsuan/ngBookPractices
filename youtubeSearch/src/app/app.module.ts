import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { YoutubeSearchModule } from './youtube-search/youtube-search.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YoutubeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
