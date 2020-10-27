import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserLogInService {
  errorEmitEvent = new Subject<{ error: string }>();

  logInUserData: {
    _id: string;
    authentication: boolean;
    logInAs: string;
    token: string;
  } = null;

  userAuthData = new Subject<{ Authentication: boolean }>();

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
          this.logInUserData = result;
          this.userAuthData.next({ Authentication: result.authentication });
        },
        ({ error }) => {
          this.errorEmitEvent.next({ error: error.message });
        },
        () => {
          console.log('complete');
          this.router.navigateByUrl('/userprofile');
        }
      );
  }
}
