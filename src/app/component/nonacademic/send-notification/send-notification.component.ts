import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from 'ng2-charts';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css'],
})
export class SendNotificationComponent implements OnInit, OnDestroy {
  @ViewChild('formData', { static: false }) formDataRef: NgForm;

  selectedFile: File = null;

  userLoginData: LogInUserModel;
  userLoginSubscription: Subscription;

  userList: number[] = [0];
  numOfUsers: number = 0;
  display = false;
  constructor(
    private userLoginService: UserLogInService,
    private nonacademicService: NonAcademicService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginSubscription = this.userLoginService.userAuthData.subscribe(
      (userData) => {
        this.userLoginData = userData;
      }
    );
  }

  onSubmit(formData: NgForm) {
    var to;

    var formDataObj = new FormData();

    if (parseInt(formData.value.category) === 0) {
      to = 'All Users';
    }
    if (parseInt(formData.value.category) === 1) {
      to = 'All Teachers';
    }
    if (parseInt(formData.value.category) === 3) {
      to = 'All Students';
    }

    if (
      parseInt(formData.value.category) === 0 ||
      parseInt(formData.value.category) === 1 ||
      parseInt(formData.value.category) === 3
    ) {
      formDataObj.append('type', formData.value.category);
      formDataObj.append('from', formData.value.from);
      formDataObj.append('to', to);
      formDataObj.append('description', formData.value.description);
      formDataObj.append('title', formData.value.title);
      formDataObj.append('nonacademicid', this.userLoginData.getUserId);
      formDataObj.append('expire', formData.value.expire);

      if (this.selectedFile != null) {
        formDataObj.append('attachment', this.selectedFile);
      }

      this.nonacademicService.sendNotification(formDataObj).subscribe(
        (data) => {
          if (data.notification) {
            this.alertMessageService.competeAlert(
              'Notificatin Update Successfully...'
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {
          this.selectedFile = null;
        }
      );
    }

    if (parseInt(formData.value.category) === 2) {
      var teacherArray: any = [];
      for (let index = 0; index < this.numOfUsers; index++) {
        teacherArray.push(formData.value[index]);
      }

      formDataObj.append('type', formData.value.category);
      formDataObj.append('from', formData.value.from);
      formDataObj.append('to', 'Specific for you');
      formDataObj.append('description', formData.value.description);
      formDataObj.append('title', formData.value.title);
      formDataObj.append('nonacademicid', this.userLoginData.getUserId);
      formDataObj.append('expire', formData.value.expire);
      formDataObj.append('teacherarray', teacherArray);

      if (this.selectedFile != null) {
        console.log(this.selectedFile);
        formDataObj.append('attachment', this.selectedFile);
      }

      this.nonacademicService.sendNotification(formDataObj).subscribe(
        (data) => {
          if (data.notification) {
            this.alertMessageService.competeAlert(
              'Notificatin Update Successfully...'
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {
          this.selectedFile = null;
        }
      );
    }

    if (parseInt(formData.value.category) === 4) {
      var studentArray: any = [];
      for (let index = 0; index < this.numOfUsers; index++) {
        studentArray.push(formData.value[index]);
      }

      formDataObj.append('type', formData.value.category);
      formDataObj.append('from', formData.value.from);
      formDataObj.append('to', 'Specific for you');
      formDataObj.append('description', formData.value.description);
      formDataObj.append('title', formData.value.title);
      formDataObj.append('nonacademicid', this.userLoginData.getUserId);
      formDataObj.append('expire', formData.value.expire);
      formDataObj.append('studentarray', studentArray);

      if (this.selectedFile != null) {
        formDataObj.append('attachment', this.selectedFile);
      }

      this.nonacademicService.sendNotification(formDataObj).subscribe(
        (data) => {
          if (data.notification) {
            this.alertMessageService.competeAlert(
              'Notification Update Successfully...'
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {
          this.selectedFile = null;
        }
      );
    }
  }

  addUser(value: number) {
    this.numOfUsers = value;

    for (let index = 1; index < value; index++) {
      this.userList[index] = index;
    }

    this.display = true;
  }

  onCancel() {
    this.formDataRef.reset();
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnDestroy() {
    this.userLoginSubscription.unsubscribe();
  }
}
