import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { CookieService } from './cookie.service';
import { HttpService } from './http.service';
import {createRendererType2} from '@angular/core/src/view';
import {error} from 'selenium-webdriver';
import { User, Identifiable } from '../model';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

declare const FB: any;

const initParams = {
    appId: '329324130837266',
    version: 'v2.9'
};


@Injectable()
export class AuthenticationService {

    private userChangeSource = new BehaviorSubject<User>(null);
    user$ = this.userChangeSource.asObservable();

    constructor(private cookie: CookieService, private http: HttpService, private router: Router) {
        FB.init(initParams);
        this.updateUser();
    }


    authenticate() {
        FB.login((resp) => {
            console.log(resp);
            if (resp.status === 'connected') {
                this.http.req('post', 'login', resp.authResponse).subscribe((loginResponse) => {
                    let session = loginResponse['session'];
                        Object.keys(session).forEach((key) => {
                            this.cookie.putCookie(key, session[key]);
                        });
                        console.log(JSON.stringify(loginResponse['user']));
                        //this.setUser(new User('proper'));
                        this.router.navigate(['/dash']);
                  }, (error) => {console.error(error); });
            } else {
                console.log('access denied');
            }
        }, {scope: 'email'});
    }

    setUser(user: User) {
        this.userChangeSource.next(user);
    }

    updateUser() {
        // this.http.req('get', '/sessions', {cmd: 'userInf', loginToken: this.cookie.retrieveCookie('loginToken'), facebookTokenKey: this.cookie.retrieveCookie('facebookTokenKey')})
        this.http.req('get', '/sessions', {cmd: 'userInf'})
            .subscribe((data) => {
                console.log(Object.keys(data['data']));
                let user: User = new User(data['data']);
                this.setUser(user);
            });
    }

    deauthenticate(): void {

    }

    isAuthenticated(fail?: (error) => any): Observable<boolean> {
        // session is null
        return this.http.req('get', '/sessions', {cmd: 'ping', loginToken: this.cookie.retrieveCookie('loginToken'), facebookTokenKey: this.cookie.retrieveCookie('facebookTokenKey')});
    }

}
