import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  BASE_URL: string = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}

  query(URL: string, params?: Array<string>): Observable<any> {
    let queryURL: string = `${this.BASE_URL}/${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`
    }
    let token = environment.spotifyToken;
    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );

    return this.http.request("GET", queryURL, {headers: header});

  }

  search(query: string, type: string): Observable<any> {
    return this.query('search', [`type=${type}`, `query=${query}`])
  }

  searchTrack(query: string) {
    return this.search(query, 'track')
  }

  getTrack(id: string) {
    return this.query(`tracks/${id}`)
  }
}
