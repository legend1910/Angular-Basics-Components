import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 ApplicationList :any=[];
  newApplicationName="";
  newApplicationContent="";

onAddEnvironment()
{
  console.log(this.newApplicationName);
  this.ApplicationList.push(
    {
      Type: "Environment",
      Name:this.newApplicationName,
      Content:this.newApplicationContent
    }
  )
}
onAddApplication()
{
  this.ApplicationList.push(
    {
      Type:'Application',
      Name:this.newApplicationName,
      Content:this.newApplicationName
    }
  )
}

}
