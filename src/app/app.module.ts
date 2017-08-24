import {BrowserModule, Title}      from '@angular/platform-browser';

import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { FacebookModule, FacebookService } from 'ngx-facebook';
import { MaterializeModule } from 'angular2-materialize';


import { MainRoutingModule }  from './main-routing';
import { AppComponent }       from './components/app-component/app.component';
import { LandingComponent }   from './components/pages/landing-component/landing.component';
import { DashboardComponent } from './components/pages/dashboard-component/dashboard.component';
import { ContentComponent }   from './components/content-component/content.component';
import { GroupsComponent }   from './components/pages/groups-component/groups.component';
import { GroupComponent }   from './components/pages/group-component/group.component';
import { NavComponent }   from './components/nav-component/nav.component';

import { AuthenticationService } from './services/authentication.service';
import { CookieService } from './services/cookie.service';
import { HttpService } from './services/http.service';
import {GroupsService} from "./services/groups.service";
import {TitleService} from "./services/title.service";
import {ModalsModule} from "./components/modals/modals.module";
import {MiscComponentsModule} from "./components/misc/misc-components.module";

/**
 * Use only for major pages. Minor components get their own modules
 */
@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        LandingComponent,
        DashboardComponent,
        GroupsComponent,
        NavComponent,
        GroupComponent,
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MainRoutingModule,
        FacebookModule,
        MaterializeModule,

        ModalsModule,
        MiscComponentsModule
    ],

    providers: [
        AuthenticationService,
        CookieService,
        HttpModule,
        HttpService,
        FacebookService,
        GroupsService,
        Title,
        TitleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
