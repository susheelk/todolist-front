import { Component } from '@angular/core';
import {CookieService} from '../../services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CookieService]
})
export class AppComponent {
  title = 'app works!';

  constructor(cs: CookieService){}
}
