import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LogInUserModel } from 'src/app/models/login-user.model';

@Injectable({ providedIn: 'root' })
export class UserLogInService {
  errorEmitEvent = new Subject<{ error: string }>();

  logInUserData: {
    _id: string;
    authentication: boolean;
    logInAs: string;
    token: string;
  } = {
    _id: 'ST_1',
    authentication: true,
    logInAs: 'student',
    token: '',
  }; //this is dumy for the development need to be get for the serve

  userAuthData = new BehaviorSubject<LogInUserModel>(
    new LogInUserModel('ST_1', true, 'student', 'ss', 112)
  );

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

      .subscribe(
        (result) => {
          var userData = new LogInUserModel(
            result._id,
            result.authentication,
            result.logInAs,
            result.token,
            result.expirationdata
          );

          this.userAuthData.next(userData);
        },
        ({ error }) => {
          this.errorEmitEvent.next({ error: error.message });
        },
        () => {
          console.log('complete');
          this.router.navigate(['user']);
        }
      );
  }
}
