import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  //serverElements = [];
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    //console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value
    });
  }
}
