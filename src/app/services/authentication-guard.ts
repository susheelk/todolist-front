import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

import 'rxjs/';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // console.log(this.authService.isAuthenticated());
      // if(this.authService.isAuthenticated()){
      //     return true;
      // }
      // this.router.navigate(['/landing']);
      // return false;


      return this.authService.isAuthenticated().map((value) => {
            if (value['status']['status']) {
              if(state.url === '/landing') {
                this.router.navigate(['/dash']);
              }
              return true;
            }
            this.router.navigate(['/landing']);
            return false;
        });


    }
}
