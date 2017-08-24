import {Component, OnInit} from '@angular/core';
import {CookieService} from '../../services/cookie.service';
import {User} from "../../model";
import {AuthenticationService} from "../../services/authentication.service";
import {audit} from "rxjs/operator/audit";
import {Router, NavigationStart} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {Title} from "@angular/platform-browser";

const routeTitles = {
    '/dash': 'Dashboard',
    '/': 'Dashboard',
    '/groups': 'Groups',
    '/landing': 'Welcome'
};

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    providers: [CookieService]
})
export class NavComponent implements OnInit {

    private user: User = new User(null);
    private loggedIn: boolean = true;
    private routeTitle: string;

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private ts: TitleService
    ){}

    ngOnInit() {
        this.auth.user$.subscribe((user: User) => {
            this.user = user;
            this.loggedIn = user != null;
        });

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.ts.setTitle(this.getRouteTitle(event.url));
            }
            this.ts.title$.subscribe((title) => {
                this.routeTitle = title.toString();
            });
        });
    }

    isRoute(url: string) {
        return this.routeTitle == url;
    }


    getRouteTitle(url: string): string {
        try {
            return ((routeTitles[url]).toString()) || '';
        }
        catch (e) {
            return '';
        }
    }

    navigate(): void {
        this.router.navigate(['/'+'dash']);
    }




}

