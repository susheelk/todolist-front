import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';


@Injectable()
export class CookieService {

    // Stores the cookie for one session
    putCookie(key: string, value: string): void {
        document.cookie = key + '=' + value;
    }

    // putCookie(key: string, value: string, expiryDays: number): void {
    //
    // }

    removeCookie(key: string) {
        this.putCookie(key, '');
    }

    retrieveCookie(key: string): string {
        const raw = document.cookie.split('; ');
        for(let val of raw) {
            console.log(raw);
            const cookie = val.split('=');
            if (cookie[0] == key) {
              return cookie[1];
            }
        }
        return null;
    }

}
