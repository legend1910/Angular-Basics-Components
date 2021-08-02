import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // These : are not type we are assigin value i.e Key/Value pair
  ApplicationList = [{ Type: 'Application', Name: 'Test Application', Content: 'Just a Application' }];

  onAddEnvironmentAdded(EnvironmentData: { AppName: string, ContentData: string }) {
    this.ApplicationList.push(
      {
        Type: 'Environment',
        Name: EnvironmentData.AppName,
        Content: EnvironmentData.ContentData
      })
  }
  onAddApplicationAdded(ApplicationData: { AppName: string, ContentData: string }) {

    this.ApplicationList.push(
      {
        Type: 'Application',
        Name: ApplicationData.AppName,
        Content: ApplicationData.ContentData
      }
    )
  }


}
