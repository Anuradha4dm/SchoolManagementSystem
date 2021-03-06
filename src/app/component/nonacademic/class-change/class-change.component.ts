import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-class-change',
  templateUrl: './class-change.component.html',
  styleUrls: ['./class-change.component.css'],
})
export class ClassChangeComponent implements OnInit {
  @ViewChild('formData', { static: true }) formDataRef: NgForm;
  @ViewChild('classSwitchFormData', { static: true })
  classSwitchFormData: NgForm;

  showSwitchBtn: boolean = true;
  progressMessage: string = 'Progressing Chnages......';

  progressbar: number = 0;
  progressBarShow: boolean = false;

  currentGradeData: { grade: string; gradeid: number } = {
    grade: '',
    gradeid: 0,
  };

  loginUserData: LogInUserModel;

  constructor(
    private nonacademicService: NonAcademicService,
    private alertMessageService: AlertMessageService,
    private userLoginSercice: UserLogInService
  ) {}
  ngOnInit(): void {
    this.userLoginSercice.userAuthData.subscribe((userData) => {
      this.loginUserData = userData;
    });
  }

  onSubmit(formData: NgForm) {
    this.nonacademicService
      .postUpdateStudentGrade(
        formData.value.move_class,
        formData.value.student_id,
        this.loginUserData.getUserId
      )
      .subscribe(
        (data) => {
          if (data.update) {
            this.alertMessageService.competeAlert(
              `Student assign to ${formData.value.move_class} successfully..`
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert('Update Faile ,try later....');
        },
        () => {
          this.formDataRef.reset();
        }
      );
  }

  getClass(studentid: string) {
    this.nonacademicService
      .getClassOfTheStudent(studentid.toUpperCase())
      .subscribe((data) => {
        this.currentGradeData.grade = data.grade;
        this.currentGradeData.gradeid = data.gradeid;
      });
  }

  onCansel() {
    this.formDataRef.reset();
  }

  onSubjectRest(value: string) {
    this.nonacademicService.subjectReset(value.toUpperCase()).subscribe(
      (result) => {
        if (result.update) {
          this.alertMessageService.competeAlert(
            'Reset ' +
              value.toUpperCase() +
              ' Student Subjects Successfully....'
          );
        }
      },
      (error) => {
        this.alertMessageService.errorAlert(error.error.message);
      }
    );
  }

  onSubmitSwitchClass(classSwitchFormData: NgForm) {
    this.progressBarShow = true;
    const interval = setInterval(() => {
      this.progressbar += 5;
    }, 1000);

    this.nonacademicService
      .onSwitchClassOfStudentForTheYear(classSwitchFormData.value.switchtype)
      .subscribe(
        (data) => {
          if (data.gradeUpdate) {
            this.alertMessageService.competeAlert('Grape upadte is Done...');
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.messsage);
        },
        () => {
          clearInterval(interval);
          this.progressbar = 100;
          this.classSwitchFormData.reset();
          this.showSwitchBtn = false;
          this.progressMessage = 'Process Completed...';
        }
      );
  }
}
