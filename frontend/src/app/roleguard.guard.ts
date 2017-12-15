import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { LoginService } from './services/login.service';

@Injectable()
export class RoleguardGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.getStatus() != 'admin') {
      this.router.navigate(['/']);
      console.log("do not hack admin page !! " + this.loginService.getStatus());
    } else {
      console.log("passed !! " + this.loginService.getStatus());
      return this.loginService.getStatus();
    }
  }
}
