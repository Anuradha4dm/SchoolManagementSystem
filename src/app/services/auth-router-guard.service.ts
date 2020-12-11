import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { take, tap } from 'rxjs/operators';
import { UserLogInService } from '../component/homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class NameGuard implements CanActivate {
  constructor(private userLoginService: UserLogInService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.userLoginService.userAuthData.pipe(
      take(1),
      tap((user) => {})
    );

    return true;
  }
}
