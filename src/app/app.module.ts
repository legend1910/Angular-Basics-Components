import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { ApplicationComponentComponent } from './application-component/application-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    ApplicationComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
