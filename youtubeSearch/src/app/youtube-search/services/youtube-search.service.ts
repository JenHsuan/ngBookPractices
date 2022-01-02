import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  Inject
} from '@angular/core';
import { map } from "rxjs/operators";

import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result.model';

@Injectable()
export class YoutubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) { }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;
    // Use rxjs operator here
    // Specify the type of response
    return this.http.get(queryUrl).pipe(map((response: {
      [key: string]: any
    }) => {
      return <any>response['items'].map((item: any) => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet
        });
      })
    }));
  }
}

export const YOUTUBE_API_KEY: string = "XXX_YOUR_KEY_HERE_XXX";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
