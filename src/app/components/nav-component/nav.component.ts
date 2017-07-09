import { Component } from '@angular/core';
import {CookieService} from '../../services/cookie.service';
import {User} from "../../model";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [CookieService]
})
export class NavComponent {

    private user: User = new User(null);

    constructor(){}

}
