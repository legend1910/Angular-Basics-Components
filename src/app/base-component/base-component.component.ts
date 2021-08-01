import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {
 
  newApplicationName="";
  newApplicationContent="";

  onAddEnvironment()
{
  console.log(this.newApplicationName);/*
  this.ApplicationList.push(
    {
      Type: "Environment",
      Name:this.newApplicationName,
      Content:this.newApplicationContent
    }
  )*/
}
onAddApplication()
{
  /*
  this.ApplicationList.push(
    {
      Type:'Application',
      Name:this.newApplicationName,
      Content:this.newApplicationName
    }
  )*/
}
  constructor() { }

  ngOnInit(): void {
  }

}
