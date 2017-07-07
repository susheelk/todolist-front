import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';


@Injectable()
export class CookieService {

    putCookie(key: string, value: string) {
        document.cookie = key + '=' + value;
    }

    removeCookie(key: string) {
        this.putCookie(key, '');
    }

    retrieveCookie(key: string): string {
        const raw = document.cookie.split(';');
        for(let val of raw) {
            const cookie = val.split('=');
            if (cookie[0] == key) {
              return cookie[1];
            }
        }
        return null;
    }

}
