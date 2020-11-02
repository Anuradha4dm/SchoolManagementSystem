import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';
import { LogInUserModel } from 'src/app/models/login-user.model';
import { UserLogInService } from '../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  loginUserData: LogInUserModel;

  constructor(
    private userLoginService: UserLogInService,
    private httpClient: HttpClient
  ) {
    this.userLoginService.userAuthData.subscribe((data) => {
      this.loginUserData = data;
    });
  }

  getMainBoardDetails() {
    return this.httpClient
      .get<{
        averageData: { year: number; term: number; average: number }[];
      }>(
        'http://localhost:3000/student/dashboard/' +
          this.loginUserData.getUserId
      )
      .pipe(
        map((data) => {
          var xArr = [];
          var yArr = [];

          data.averageData.forEach((element) => {
            xArr.push(element.year + ' ' + element.term + 'T');
            yArr.push(element.average);
          });

          return { xData: xArr, yData: yArr };
        })
      );
  }
}
