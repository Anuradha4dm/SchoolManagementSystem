import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogInUserModel } from 'src/app/models/login-user.model';

@Injectable({ providedIn: 'root' })
export class UserLogInService {
  errorEmitEvent = new Subject<{ error: string }>();

  // logInUserData: {
  //   _id: string;
  //   authentication: boolean;
  //   logInAs: string;
  //   token: string;
  // } = {
  //   _id: '',
  //   authentication: false,
  //   logInAs: '',
  //   token: '',

  // }; //this is dumy for the development need to be get for the serve

  userAuthData = new BehaviorSubject<LogInUserModel>(null);

  constructor(private httpClient: HttpClient, private router: Router) {}

  postLogInUser(formData: { _id: string; password: string }) {
    this.httpClient
      .post<{
        _id: string;
        authentication: boolean;
        logInAs: string;
        token: string;
        expirationdata: number;
      }>('http://localhost:3000/auth/login', formData)
      .pipe(
        tap((result) => {
          var userData = new LogInUserModel(
            result._id,
            result.authentication,
            result.logInAs,
            result.token,
            result.expirationdata
          );

          this.userAuthData.next(userData);
        })
      )
      .subscribe(
        (userData) => {
          //user log in and emiting the login user data
          this.autoLogout(userData.expirationdata);
          localStorage.setItem('userData', JSON.stringify(userData));
        },
        ({ error }) => {
          this.errorEmitEvent.next({ error: error.message });
        },
        () => {
          this.router.navigate(['user']);
        }
      );
  }

  autoLogin() {
    const previousLogin: any = JSON.parse(localStorage.getItem('userData'));

    if (previousLogin) {
      const user = new LogInUserModel(
        previousLogin._id,
        previousLogin.authentication,
        previousLogin.logInAs,
        previousLogin.token,
        previousLogin.expirationdata
      );
      this.autoLogout(previousLogin.expirationdata);
      this.userAuthData.next(user);
      this.router.navigate(['user']);
    }
  }

  logout() {
    this.userAuthData.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['']);
  }

  autoLogout(expire: number) {
    setTimeout(() => {
      this.userAuthData.next(null);
      localStorage.removeItem('userData');
      this.router.navigate(['']);
    }, expire - new Date().getTime());
  }
}
