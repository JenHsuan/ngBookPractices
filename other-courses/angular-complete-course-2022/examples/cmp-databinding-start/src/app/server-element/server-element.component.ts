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

  id: number;
  constructor() {
    this.id = Math.floor(Math.random() * 100)
    console.log(this.id + ': constructor');
  }
  ngOnDestroy(): void {
    console.log(this.id + ': ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log(this.id + ': ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log(this.id + ': ngAfterViewInit');
    //console.log('textContent:' + this.heading.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log(this.id + ': ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log(this.id + ': ngAfterContentInit')
    //console.log('textContent of Paragraph:' + this.contentParagraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log(this.id + ": ngDocheck")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.id + ': ngOnChanges');
    //console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.id + ': ngOnInit');
    //console.log('textContent:' + this.heading.nativeElement.textContent)
    //console.log('textContent of Paragraph:' + this.contentParagraph.nativeElement.textContent);
  }

}
