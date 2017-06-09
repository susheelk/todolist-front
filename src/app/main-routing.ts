import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './components/app-component/app.component';
import { LandingComponent }     from './components/landing-component/landing.component';
import { DashboardComponent }   from './components/dashboard-component/dashboard.component';
import { ContentComponent }     from './components/content-component/content.component';

import { AuthenticationGuard }  from './services/authentication-guard';
import { AuthenticationService }  from './services/authentication.service';

const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'dash', component: DashboardComponent, canActivate: [AuthenticationGuard]},
    {path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
    {path: '**', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthenticationGuard, AuthenticationService]

})
export class MainRoutingModule { }