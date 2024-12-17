import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    if (this.userService.loggedInUser) {
      return true;
    } 
    this.router.navigate(['login'])
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.userService.loggedInUser) {
      return true;
    } 
    this.router.navigate(['login'])
    return false;
  }
}
