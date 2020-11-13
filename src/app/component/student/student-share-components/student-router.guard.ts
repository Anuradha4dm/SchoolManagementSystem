import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Observable } from 'rxjs';
import { UserLogInService } from '../../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class StudentRouteGuard implements CanActivate {
  constructor(private loginUserService: UserLogInService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | Observable<boolean> | boolean {
    var init = false;
    this.loginUserService.userAuthData.subscribe((useData) => {
      if (useData.getUserId.includes('ST')) {
        init = true;
      }
    });

    return init;
  }
}
