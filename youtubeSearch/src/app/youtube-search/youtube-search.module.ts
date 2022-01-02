import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { youtubeSearchInjectables } from './injectables/youtube-search.injectables';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    youtubeSearchInjectables
  ]
})
export class YoutubeSearchModule { }
