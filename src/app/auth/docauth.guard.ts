import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {FirebaseauthService} from './firebaseauth.service';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocauthGuard implements CanActivate {


  constructor(private authService: AuthService,
              private router: Router,
              private fireauthService: FirebaseauthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedInDoc) { return true; };

   /* if (this.authService.isLoggedInDoc) { return this.fireauthService.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        }
      })
    ); }*/

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
