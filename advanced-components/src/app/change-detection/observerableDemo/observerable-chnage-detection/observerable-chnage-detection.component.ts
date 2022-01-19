import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observerable-chnage-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:
    `
    <div>
      <div>Total items: {{ counter }}</div>
    </div>

    `
})
export class ObserverableChnageDetectionComponent implements OnInit {
  @Input() items: Observable<number>
  counter = 0;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
      }
    },
      null,
      () => {
        this.changeDetector.markForCheck();
    })
  }

}
