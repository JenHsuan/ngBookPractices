import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html'
})
export class AllHooksComponent implements OnInit,
  OnDestroy, DoCheck,
  OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked {
  counter: number;

  constructor() {
    console.log('AllHooksComponent --- [constructor]')
    this.counter = 1;
  }

  inc(): void {
    this.counter += 1;
    console.log('AllHooksComponent --- [counter]')
  }

  ngOnInit(): void {
    console.log('AllHooksComponent --- OnInit')
  }

  ngOnDestroy(): void {
    console.log('AllHooksComponent --- ngOnDestroy')
  }

  ngDoCheck(): void {
    console.log('AllHooksComponent --- ngDoCheck')
  }

  ngOnChanges(): void {
    console.log('AllHooksComponent --- ngOnChanges')
  }

  ngAfterContentInit(): void {
    console.log('AllHooksComponent --- ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('AllHooksComponent --- ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('AllHooksComponent --- ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('AllHooksComponent --- ngAfterViewChecked')
  }

}
