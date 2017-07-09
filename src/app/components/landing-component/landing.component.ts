import { Component } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';
import {CookieService} from "../../services/cookie.service";

@Component({
  selector: 'landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
    title = 'Welcome to Todolist! You are not signed in';

    constructor(private authService: AuthenticationService, private router: Router, private cookieService: CookieService) { }

    logIn(){
        this.authService.authenticate();
    }
}
