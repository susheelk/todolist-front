import {Component, ElementRef, OnInit} from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';
import {CookieService} from "../../services/cookie.service";

declare var $: any;

@Component({
  selector: 'landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    title = 'TODOLIST';

    constructor(
      private authService: AuthenticationService,
      private router: Router,
      private cookieService: CookieService,
      private elRef: ElementRef
    ) { }

    ngOnInit() {
        // jQuery needed for Materialize plugins

        this.authService.setUser(null);
    }

    logIn(){
        this.authService.authenticate();
    }
}
