import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  results: [];
  constructor(
    private spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.results = [];
    /*
    route.params: route parameters
    route.queryParams: query string
    */
    this.route
      .queryParams
      .subscribe({
        next: params => {
          this.query = params['query'] || '';
        }
      })
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }
    this.spotify
      .searchTrack(this.query)
      .subscribe({
        next: (res: any) => {
          this.renderResults(res);
        }
      })
  }

  renderResults(res: any): void {
    this.results = [];
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string) {
    this.router.navigate(['search'], {
      queryParams: {
        query: query
      }
    })
    .then(_ => this.search())
  }

}
