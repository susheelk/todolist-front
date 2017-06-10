import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {

    private authenticated: boolean;

    constructor() {
        this.authenticated = false;
    }

    authenticate(): Observable<boolean> {
        //Mock login
        console.log('Authentication initiated');
        return Observable.of(true).delay(500).do(resp=> this.authenticated = true);
    }

    // authenticate(): boolean {
    //     this.authenticated= true;
    //     return true;
    // }

    deauthenticate(): void {
        this.authenticated = false;
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

}