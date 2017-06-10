import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { MainRoutingModule }  from './main-routing';

import { AppComponent }       from './components/app-component/app.component';
import { LandingComponent }   from './components/landing-component/landing.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';
import { ContentComponent }   from './components/content-component/content.component';
import { GroupsComponent }   from './components/groups-component/groups.component';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LandingComponent,
    DashboardComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
