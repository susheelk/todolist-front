import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { CookieService } from './cookie.service';
import { HttpService } from './http.service';
import {createRendererType2} from '@angular/core/src/view';
import {error} from 'selenium-webdriver';
import { User } from '../model';

declare const FB: any;

const initParams = {
    appId: '329324130837266',
    version: 'v2.9'
};


@Injectable()
export class AuthenticationService {

    private authenticated: boolean;


    constructor(private cookie: CookieService, private http: HttpService) {
        this.authenticated = false;
        FB.init(initParams);
    }

    authenticate(success?: (user: User) => any, fail?: (error) => any) {
        FB.login((resp) => {
            console.log(resp);
            if (resp.status === 'connected') {
                this.http.req('post', 'login', resp.authResponse).subscribe(success, fail);
            } else {
                console.log('access denied');
                fail(null);
            }
        });
    }




    // // Try to use callbacks later
    // authenticate(){
    //     FB.login((resp) => {
    //         console.log(resp);
    //         if (resp.status === 'connected') {
    //             this.http.req('post', 'login', resp.authResponse,
    //               (success) => {
    //                 console.log('success!');
    //                 console.log(success);
    //             },
    //             (error) => {
    //                 console.log('ERROR');
    //             });
    //         } else {
    //             console.log('access denied');
    //         }
    //     }, {scope: 'email'}) ;
    // }



    // authenticate(): Observable<boolean> {
    //     //Mock login
    //     console.log('Authentication initiated');
    //     this.cookie.removeCookie('sds');
    //     return Observable.of(true).delay(500).do(resp=> document.cookie='loggedIn=true');
    // }

    // authenticate(): boolean {
    //     this.authenticated= true;
    //     return true;
    // }

    deauthenticate(): void {
        this.authenticated = false;
    }

    isAuthenticated(fail?: (error) => any): Observable<boolean> {
      // session is null
      return this.http.req('get', '/sessions', {cmd: 'ping', loginToken: this.cookie.retrieveCookie('loginToken'), facebookTokenKey: this.cookie.retrieveCookie('facebookTokenKey')});
    }

}
