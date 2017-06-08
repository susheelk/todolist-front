import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './components/app-component/app.component';
import { LandingComponent } from './components/landing-component/landing.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
