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

        this.authService.updateUser();
        return this.authService.isAuthenticated().map((value) => {
            let bool = value['status']['state'];
            if (state.url === '/landing') {
                console.log(bool);
                if (bool) {
                    this.router.navigate(['/dash']);
                    return false;
                }
                return true;
            }

            if (bool) {
                return true;
            }

            if (state.url !== '/landing') {
                this.router.navigate(['/landing']);
            }

            return false;

          });


    }
}
