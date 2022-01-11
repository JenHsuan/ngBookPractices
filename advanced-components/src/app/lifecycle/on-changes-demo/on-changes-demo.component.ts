import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html'
})
export class OnChangesDemoComponent implements OnInit {
  display?: boolean;
  name?: string;
  comment?: string;
  constructor() { }

  ngOnInit(): void {
    this.display = true;
    this.name = 'Sean';
    this.comment = 'I am leaning so much!'
  }

  setValues(nameFld:string, commentFld:string): void {
    this.name = nameFld;
    this.comment = commentFld;
  }

  toggle(): void {
    this.display = !this.display;
  }
}
