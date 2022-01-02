import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-more-http-request',
  templateUrl: './more-http-request.component.html'
})
export class MoreHttpRequestComponent implements OnInit {
  httpClient: HttpClient;
  loading: boolean = false;
  data: Object | undefined;
  constructor(private http: HttpClient) {
    this.httpClient = http;
   }

  ngOnInit(): void {
  }

  makePost(): void {
    this.loading = false;
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        }))
        .subscribe(data => {
          this.data = data;
          this.loading = false;
          console.log(this.data)
        })
  }

}
