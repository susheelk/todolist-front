import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './components/app-component/app.component';
import { LandingComponent }     from './components/landing-component/landing.component';


const routes: Routes = [
    {path: 'landing': }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }