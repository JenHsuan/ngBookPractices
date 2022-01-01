import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html'
})
export class SimpleHttpComponent implements OnInit {
  //add strictPropertyInitialization=false in tsconfig
  data: Object;
  loading: boolean;
  httpClient: HttpClient;
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  makeBasicRequest(): void {
    this.loading = true;
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
        console.log(this.data)
      })
  }
  ngOnInit(): void {
  }

}
