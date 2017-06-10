import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';

import {CookieService} from './cookie.service';


@Injectable()
export class AuthenticationService {

    private authenticated: boolean;

    constructor(private cookie: CookieService) {
        this.authenticated = false;
    }

    authenticate(): Observable<boolean> {
        //Mock login
        console.log('Authentication initiated');
        this.cookie.removeCookie('sds');
        return Observable.of(true).delay(500).do(resp=> document.cookie="loggedIn=true");
    }

    // authenticate(): boolean {
    //     this.authenticated= true;
    //     return true;
    // }

    deauthenticate(): void {
        this.authenticated = false;
    }

    isAuthenticated(): boolean {
        return document.cookie=="loggedIn=true";
    }

}