import { Component, OnInit } from '@angular/core';
import { SearchResult } from './models/search-result.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html'
})
export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[] | undefined;
  loading: boolean  | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }

  updateResults(result: SearchResult[]): void {
    this.results = result;
  }

}
