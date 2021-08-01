import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-component',
  templateUrl: './application-component.component.html',
  styleUrls: ['./application-component.component.css']
})
export class ApplicationComponentComponent implements OnInit {
   // This element represents the Application(and we are defining the properties) and we are define the Ch
  // By Default all the properties  are accessed within the Component and not outside
// If you want to allow parent Components to be able to bind this to property you need to explicitly  we need to add a decorator
//@Input 
  @Input()  element!:{ Type: string; Name: string; Content: string; };
constructor() { }

  ngOnInit(): void {
  }

}
