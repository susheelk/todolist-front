import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';


@Injectable()
export class CookieService {

    putCookie(id: string, value: string) {
        document.cookie="loggedIn=true";
    }

    removeCookie(id: string) {
        
    }

    retrieveCookie(id: string) {

    }

}