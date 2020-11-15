import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../homepage/login/user-login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  @ViewChild('formData', { static: false }) formData: NgForm;

  userLoginData: LogInUserModel;
  userDataSubscription: Subscription;

  constructor(
    private loginUserService: UserLogInService,
    private httpClient: HttpClient,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userDataSubscription = this.loginUserService.userAuthData.subscribe(
      (data) => {
        this.userLoginData = data;
      }
    );
  }

  onPasswordReset(formData: NgForm) {
    this.httpClient
      .post<{ update: boolean }>(
        'http://localhost:3000/auth/new-password',
        {
          userid: this.userLoginData.getUserId,
          newPassword: formData.value.new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${this.userLoginData.getToken}`,
          },
        }
      )
      .subscribe(
        (data) => {
          if (data.update) {
            this.alertMessageService.competeAlert(
              'Password Change Successfully...'
            );

            this.formData.reset();
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        }
      );
  }

  onCancel() {
    this.formData.reset();
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }
}
