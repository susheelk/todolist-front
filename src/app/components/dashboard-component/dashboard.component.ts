import { AuthenticationService } from '../../services/authentication.service';
import { HttpService } from '../../services/http.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import {User} from "../../model";


@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthenticationService, HttpService]
})
export class DashboardComponent {

    private user: User = new User(null);

    constructor(private http: HttpService, private auth: AuthenticationService) {

    }

    ngOnInit() {
        this.auth.user$.subscribe((user: User) => {
          console.log('does this even run?');
          this.user = user;
        });
        this.auth.updateUser();
    }




}
