import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { min } from 'rxjs/operators';
import { LogInUserModel } from 'src/app/models/login-user.model';
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
  2;
  subscrible1: Subscription;
  subscrible2: Subscription;
  loginuserData: LogInUserModel;
  years: number[];
  classVal: string;

  resultReviewArray: { subject: string; marks: number; grade: string }[] = [];

  constructor(
    private webSocketService: WebSocketService,
    private userLoginService: UserLogInService,
    private studentProfileService: StudentProfileService
  ) {}

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loginuserData = data;
    });

    this.webSocketService.emit('getYear', {
      data: this.loginuserData.getUserId,
    });

    this.subscrible1 = this.webSocketService
      .listen('years')
      .subscribe((data) => {
        this.years = data.years;
      });

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
    this.studentProfileService
      .viewResultOfSpecificStudent(formData.value)
      .subscribe(
        (data) => {
          this.resultReviewArray = data.resultarray;
          console.log(data);
        },
        (error) => {
          console.log(error);
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
