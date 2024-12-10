import { Injectable } from '@angular/core';
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    const isLoggedIn = true;
    if (isLoggedIn) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
