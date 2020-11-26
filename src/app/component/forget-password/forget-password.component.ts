import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  @ViewChild('forgetPasswotdRequestForm', { static: false })
  forgetPasswotdRequestForm: NgForm;
  @ViewChild('formData', { static: false }) formData: NgForm;

  error: string = null;
  resetToken: string = null;
  resetmode: boolean = false;
  userRole: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      if (data.resetmode === 'true') {
        this.resetmode = true;
        this.resetToken = data.token;
        this.userRole = data.role;
      }
    });
  }

  onResetPassword(formData) {
    this.httpClient
      .post<{ reset: boolean }>(
        'http://localhost:3000/auth//set-new-password-forget',
        {
          newpassword: formData.value.new_password,
          token: this.resetToken,
          role: this.userRole,
        }
      )
      .subscribe(
        (data) => {
          if (data.reset) {
            this.alertMessageService.competeAlert('Complete Password Reset...');
          }
        },
        (error) => {
          this.error = error.error.message;
        },
        () => {
          this.formData.reset();
          this.router.navigate['/'];
        }
      );
  }

  forgetPasswordReset(forgetPasswotdRequestForm) {
    this.httpClient
      .post<{ resetLink: boolean }>(
        'http://localhost:3000/auth/forget-password',
        {
          userid: forgetPasswotdRequestForm.value.userid,
          email: forgetPasswotdRequestForm.value.email,
        }
      )
      .subscribe(
        (data) => {
          if (data.resetLink) {
            this.alertMessageService.competeAlert('Check Email For Reset Link');
          }
        },
        (error) => {
          this.error = error.error.message;
        },
        () => {
          this.forgetPasswotdRequestForm.reset();
        }
      );
  }

  onCancel() {}
}
