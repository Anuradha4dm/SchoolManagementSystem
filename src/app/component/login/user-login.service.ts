import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserLogInService {
  errorEmitEvent = new Subject<{ error: string }>();

  userAuthData = new Subject<{
    _id: string;
    authentication: boolean;
    logInAs: string;
    token: string;
  }>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  postLogInUser(formData: { _id: string; password: string }) {
    this.httpClient
      .post<{
        _id: string;
        authentication: boolean;
        logInAs: string;
        token: string;
      }>('http://localhost:3000/auth/login', formData)

      .subscribe(
        (result) => {
          this.userAuthData.next(result);
          this.router.navigate['userprofile'];
        },
        ({ error }) => {
          this.errorEmitEvent.next({ error: error.message });
        },
        () => {
          console.log('complete');
        }
      );
  }
}
