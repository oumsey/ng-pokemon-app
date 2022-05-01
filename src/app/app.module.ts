import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//All elements (component, directive,...) we need in this module except module
    AppComponent
  ],
  imports: [// all module we need in this module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//for injection of dependance of angular
  bootstrap: [AppComponent]//include root comonent
})
export class AppModule { }
