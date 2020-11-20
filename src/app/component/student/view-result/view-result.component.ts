import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { LogInUserModel } from 'src/app/models/login-user.model';

import { AlertMessageService } from 'src/app/services/alert-message.service';
import { WebSocketService } from 'src/app/services/websocket.service';

import { UserLogInService } from '../../homepage/login/user-login.service';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css'],
})
export class ViewResultComponent implements OnInit, OnDestroy {
  averageMarks: number;
  averagedata: {
    message: string;
    average: number;
    place: number;
    name: string;
    update: string;
  } = {
    name: 'Username',
    average: 0,
    place: 1,
    message: 'This is the comment from teacher',
    update: '200',
  };

  currentdate = new Date();

  subscrible1: Subscription;
  subscrible2: Subscription;
  loginuserData: LogInUserModel;
  years: number[];
  classVal: string;

  resultReviewArray: { subject: string; marks: number; grade: string }[] = [];

  constructor(
    private webSocketService: WebSocketService,
    private userLoginService: UserLogInService,
    private studentProfileService: StudentProfileService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loginuserData = data;
    });

    this.webSocketService.emit('getYear', {
      studentid: this.loginuserData.getUserId,
    });

    this.subscrible1 = this.webSocketService.listen('years').subscribe(
      (data) => {
        this.years = data.years;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.subscrible2 = this.webSocketService.listen('popClass').subscribe(
      (data) => {
        this.classVal = data;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  onSubmit(formData) {
    var sendData = {
      ...formData.value,
      studentid: this.loginuserData.getUserId,
    };

    this.studentProfileService.viewResultOfSpecificStudent(sendData).subscribe(
      (data) => {
        this.resultReviewArray = data.resultarray;
        this.averagedata.name = data.studentname;
        this.averagedata.average = data.average;
        this.averagedata.place = data.place;
        this.averagedata.message = data.message;
        this.averagedata.update = data.update;
      },
      (error) => {
        this.alertMessageService.errorAlert('NO DATA FOUND');
      }
    );
  }

  ngOnDestroy() {
    this.subscrible1.unsubscribe();
    this.subscrible2.unsubscribe();
  }

  onSelectTerm(year, term) {
    this.webSocketService.emit('getGrades', {
      id: this.loginuserData.getUserId,
      year: year,
      term: term,
    });
  }
}
