import { AuthenticationService } from '../../services/authentication.service';
import { HttpService } from '../../services/http.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';


@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthenticationService, HttpService]
})
export class DashboardComponent {

  constructor(private http: HttpService){}

  tryPost(): void {
    // this.http.post("", {user: {
    //   'username': 'a',
    //   'password': 'a',
    // }}).subscribe();
    // this.http.post('login', {
    //   user: {
    //     'username': 'a',
    //     'password': 'a'
    //   },
    //   stayLogged: true
    // }).subscribe((success)=>console.log(success), (error)=>{console.log(error)});
    console.log("tred");
  }
}
