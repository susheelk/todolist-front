import { BrowserModule }      from '@angular/platform-browser';

import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { FacebookModule, FacebookService } from 'ngx-facebook';
import { MaterializeModule } from 'angular2-materialize';


import { MainRoutingModule }  from './main-routing';
import { AppComponent }       from './components/app-component/app.component';
import { LandingComponent }   from './components/landing-component/landing.component';
import { DashboardComponent } from './components/dashboard-component/dashboard.component';
import { ContentComponent }   from './components/content-component/content.component';
import { GroupsComponent }   from './components/groups-component/groups.component';
import { GroupComponent }   from './components/group-component/group.component';
import { NavComponent }   from './components/nav-component/nav.component';

import { AuthenticationService } from './services/authentication.service';
import { CookieService } from './services/cookie.service';
import { HttpService } from './services/http.service';
import {GroupsService} from "./services/groups.service";


@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        LandingComponent,
        DashboardComponent,
        GroupsComponent,
        NavComponent,
        GroupComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MainRoutingModule,
        FacebookModule,
        MaterializeModule
    ],

    providers: [AuthenticationService, CookieService, HttpModule, HttpService, FacebookService, GroupsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
