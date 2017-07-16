import { Component } from '@angular/core';
import {CookieService} from '../../services/cookie.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../../styles.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CookieService]
})
export class AppComponent {
  title = 'app works!';

  constructor(cs: CookieService){}
}

