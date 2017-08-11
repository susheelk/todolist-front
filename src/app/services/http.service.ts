import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, Response } from '@angular/http';

import { environment } from '../../environments/environment';
import {CookieService} from "./cookie.service";

// TODO push back success/fail here

@Injectable()
export class HttpService {

    private baseUrl: string;

    constructor(private http: Http, private cookie: CookieService) {
        this.baseUrl = environment.server;
        console.log(this.baseUrl);
    }


    req(method: string, path: string, data: Object) {
        return (method == 'get' ? this.get(path, this.sign(data)) : this.post(path, this.sign(data)));
    }


    private get(path: string, data: Object) {
        let params: URLSearchParams = new URLSearchParams();
        for (let key in data){
            params.set(key, data[key]);
        }

        return this.http.get(this.baseUrl + path, {
                search: params
            }).map((res: Response) => {
          return JSON.parse(res['_body']);
        });

    }

    private sign(data: Object) {
        data['loginToken'] = this.cookie.retrieveCookie('loginToken');
        data['facebookTokenKey'] = this.cookie.retrieveCookie('facebookTokenKey');
        console.log(this.cookie.retrieveCookie('facebookTokenKey'));
        return data;
    }


    private post(path: string, data: Object){
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + path, data, options).map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    // Taken from official docs
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



}
