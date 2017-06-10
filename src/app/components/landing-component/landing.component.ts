import { Component } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  title = 'Welcome to Todolist! You are not signed in';

  constructor(private authService: AuthenticationService, private router: Router) { }

  logIn(){
    this.authService.authenticate().subscribe(success => {
      if (success) {
        this.router.navigate(['/dash']);
      }
    });
  }
}
