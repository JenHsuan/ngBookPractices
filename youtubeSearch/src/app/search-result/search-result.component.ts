import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { SearchResult } from '../youtube-search/models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
