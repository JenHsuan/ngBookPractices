import { InvokeFunctionExpr } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Disble encapsulation
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('contentParagraph', { static: true }) contentParagraph: ElementRef;

  constructor() {
    console.log('constructor');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    //console.log('textContent:' + this.heading.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
    //console.log('textContent of Paragraph:' + this.contentParagraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log("ngDocheck")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:');
    //console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //console.log('textContent:' + this.heading.nativeElement.textContent)
    //console.log('textContent of Paragraph:' + this.contentParagraph.nativeElement.textContent);
  }

}
