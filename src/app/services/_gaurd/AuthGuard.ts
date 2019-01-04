
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {  USER_TOKEN } from 'src/app/shared/config';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(private router : Router){   
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem(USER_TOKEN)){
            //LoggedIn 
            return true;
        }
        //Not Logged in Redirect to Login Screen.
        this.router.navigate(['/'], {queryParams: {returnUrl : state.url}});
        return false;
    }
}