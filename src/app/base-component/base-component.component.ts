import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {

  /*
  Create tow properties which 
  to pass the value for base to app component we need to create a propety and assign a new value and new eventEmitter
  1. First Create an event emitter
  2. on the Function Invoke
  */
  @Output() ApplicationCreated = new EventEmitter<{AppName:string,ContentData:string}>();
  @Output() EnvironmentCreated= new EventEmitter<{AppName:string,ContentData:string}>();
  newApplicationName="";
  newApplicationContent="";

  constructor() { }

  ngOnInit(): void {
  }
  onAddApplication()
  {
this.ApplicationCreated.emit(
  {
    AppName:this.newApplicationName,
    ContentData: this.newApplicationContent
  });
  }
  onAddEnvironment()
  {
    this.EnvironmentCreated.emit(
      {
        AppName:this.newApplicationName,
        ContentData: this.newApplicationContent
      });
  }
}
