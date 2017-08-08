import {Component, OnInit} from '@angular/core';
import {CookieService} from '../../services/cookie.service';
import {User} from "../../model";
import {AuthenticationService} from "../../services/authentication.service";
import {audit} from "rxjs/operator/audit";
import {Router, NavigationStart} from "@angular/router";

const routeTitles = {
    '/dash': 'Dashboard',
    '/': 'Dashboard',
    '/groups': 'Groups'
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
    private currentRoute: string;

    constructor(private auth: AuthenticationService, private router: Router){}

    ngOnInit() {
        this.currentRoute = this.router.url;
        this.auth.user$.subscribe((user: User) => {
            this.user = user;

            this.loggedIn = user != null;
        });
        //this.auth.updateUser();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.currentRoute = event.url;
            }
        });
    }

    isRoute(url: string) {
        return this.currentRoute == url;
    }


    getRouteTitle(): string {
        return (routeTitles[this.currentRoute]).toString();
    }

    navigate(): void {
        this.router.navigate(['/'+'dash']);
    }




}
