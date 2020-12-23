import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { Student } from 'src/app/models/student.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  loginUserData: LogInUserModel;

  //subsvribers
  loginUserDataSubscriber: Subscription;
  userprofileSubscription: Subscription;

  studentProfileData: Student;
  studentPerformance: { eventname: string; place: string }[] = [
    { eventname: 'Relay', place: '1 st Place' },
    { eventname: 'Relay', place: '1 st Place' },
  ];

  registeredSubjects: string[] = [];
  isShowRegisteredSubject: boolean = false;

  imagePath: string = '';

  absentDates: string[] = [
    new Date().toDateString(),
    new Date().toDateString(),
    new Date().toDateString(),
  ];

  showDate: boolean = false;

  gradeupdate: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService,
    private loginUserService: UserLogInService,
    private confirmationDialogService: ConfirmationDialogService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.loginUserDataSubscriber = this.loginUserService.userAuthData.subscribe(
      (userData) => {
        this.loginUserData = userData;
      }
    );

    this.userprofileSubscription = this.studentProfileService
      .getStudent(this.loginUserData.getUserId)
      .subscribe(
        (result) => {
          this.studentProfileData = result;

          this.gradeupdate =
            this.studentProfileData.graderegistration <
              new Date(2021, 1, 3).getFullYear() &&
            parseInt(this.studentProfileData.grade.split('_')[0]) === 11;

          this.imagePath =
            'http://localhost:3000/' + this.studentProfileData.imagePath;
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {
          if (this.gradeupdate) {
            this.confirmationDialogService
              .confirm(
                'Please confirm...',
                'You need to update your grade to the next yeat... Would you like to to it now?'
              )
              .then((confirmed) => {
                if (confirmed) {
                  this.onEditProfile(true);
                }
              })
              .catch(() =>
                console.log(
                  'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
                )
              );
          }
        }
      );
  }

  toggleShowBtn() {
    this.showDate = !this.showDate;
  }

  onEditProfile(update: boolean = this.gradeupdate) {
    this.router.navigate(
      ['user', 'edit-profile', this.loginUserData.getUserId],
      { queryParams: { gradeupdate: update } }
    );
  }

  onResetPassword() {
    this.router.navigate(['user', 'reset-password']);
  }

  onClickSports() {
    this.router.navigate(['user', 'sports'], {
      queryParams: {
        age: this.studentProfileData.age,
        studentid: this.studentProfileData._id,
        studentname:
          this.studentProfileData.firstName +
          ' ' +
          this.studentProfileData.lastName,
      },
    });
  }

  ngOnDestroy() {
    this.loginUserDataSubscriber.unsubscribe();
    this.userprofileSubscription.unsubscribe();
  }

  onClickTable() {
    document.location.href = 'http://localhost:3000/timetable/tt_11_D.pdf';
  }
}
