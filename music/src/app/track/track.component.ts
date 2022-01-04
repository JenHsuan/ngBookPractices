import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  id: string = '';
  track: { [key: string]: any } = {};
  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    /*
    route.params: route parameters
    route.queryParams: query string
    */
    this.route
      .params
      .subscribe({
        next: params => {
          this.id = params['id'] || '';
        }
      })
  }

  ngOnInit(): void {
    this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res))
  }

  renderTrack(res: any) {
    this.track = {};
    console.log(res)
    if (res) {
       this.track = res;
    }
  }

  back() {
    this.location.back();
  }
}
