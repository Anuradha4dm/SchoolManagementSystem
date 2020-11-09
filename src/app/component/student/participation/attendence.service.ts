import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInUserModel } from 'src/app/models/login-user.model';

import { UserLogInService } from '../../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class AttendenceService {
  logingUserData: LogInUserModel;

  constructor(
    private userLoginService: UserLogInService,
    private httpClient: HttpClient
  ) {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.logingUserData = userData;
    });
  }

  getMiainAttendenceChartData() {
    return this.httpClient.post<{
      monthattendence: number[];
      presentage: number;
      totalpresents: number;
      absentDates: string[];
    }>('http://localhost:3000/student/get-attendence-mainchart-data', {
      studentid: this.logingUserData.getUserId,
    });
  }
}
