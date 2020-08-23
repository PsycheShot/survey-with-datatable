import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationservice: AuthenticationService
  ) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    const currentUser = this.authenticationservice.currentUserValue;
    if (currentUser){
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    return false;
    
  }
}