import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customInterval = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        //cancel
        if (count > 3) {
          observer.error(new Error('error'))
        }
        count++;
      }, 1000)
    })

    this.subscription = customInterval.pipe(
      filter(data => {
        return data > 1;
      }),
      map(data => {
        return 'round' + data;
      })
    ).subscribe(
      data => {
      console.log(data)
      }, err => {
        console.log(err)
    }, () => console.log('complete'))
  }

}
