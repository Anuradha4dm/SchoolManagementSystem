import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogInService } from '../component/homepage/login/user-login.service';
import { catchError, exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private userLoginService: UserLogInService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.userLoginService.userAuthData.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }

        const modifiedURL = req.clone({
          headers: new HttpHeaders().append(
            'Authorization',
            'Bearer ' + user.getToken
          ),
        });

        return next.handle(modifiedURL);
      })
    );
  }
}
