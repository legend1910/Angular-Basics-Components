import { Component, Input, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('ApplicationContent')ApplicationContent!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddApplication( _ApplicationName: HTMLInputElement)
  {
    console.log(_ApplicationName.value)
this.ApplicationCreated.emit(
  {
    AppName:_ApplicationName.value,
    ContentData: this.ApplicationContent.nativeElement.value
    //ContentData: this.ApplicationContent // will send the object not the value

  });
  }
  onAddEnvironment()
  {
    this.EnvironmentCreated.emit(
      {
        AppName:this.newApplicationName,
        ContentData: this.ApplicationContent.nativeElement.value
      });
  }
}
