
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(private router : Router){   
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('currentUser')){
            //LoggedIn 
            return true;
        }
        //Not Logged in Redirect to Login Screen.
        this.router.navigate(['/'], {queryParams: {returnUrl : state.url}});
        return false;
    }
}