import { Injectable }   from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        //return false;
        console.log(this.authService.isAuthenticated());
        if(this.authService.isAuthenticated()){
            return true;
        }
        this.router.navigate(['/landing']);
        return false;
    }

}