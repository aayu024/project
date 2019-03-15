import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../providers/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  login(param: string) {
    return this.authService.login(param);
  }
  canActivate(): boolean {
    return this.authService.isAuthenticate();
  }
  getToken() {
    return this.authService.getToken();
  }
  logout() {
    this.authService.logout();
  }
}
