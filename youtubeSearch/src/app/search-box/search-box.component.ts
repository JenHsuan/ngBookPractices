import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { SearchResult } from '../youtube-search/models/search-result.model';
import { YoutubeSearchService } from '../youtube-search/services/youtube-search.service';
@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBoxComponent implements OnInit{
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private youtube:YoutubeSearchService, private el:ElementRef) { }
  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.youtube.search(query)),
        switchAll()
      )
      .subscribe({
        next: (result: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(result);
        },
        error: (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        complete: () => {
          this.loading.emit(false);
        }
      })
  }

}
