import {AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthenticationService]
})
export class DashboardComponent {

}
