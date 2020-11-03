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

  getDataForChartData(subject: string) {
    return this.httpClient
      .post<{ data: { year: number; term: number; marks: number }[] }>(
        'http://localhost:3000/student/get-chart1-data',
        {
          studentid: this.loginUserData.getUserId,
          subjectname: subject,
        }
      )
      .pipe(
        map((data) => {
          var xLabel = [];
          var yLabel = [];

          data.data.forEach((element) => {
            xLabel.push(element.year + ' ' + element.term + 'T');
            yLabel.push(element.marks);
          });

          return { xAxis: xLabel, yAxis: yLabel };
        })
      );
  }

  getChart2Data(year, term) {
    return this.httpClient.post<any>(
      'http://localhost:3000/student/get-chart2-data',
      {
        year: year,
        term: term,
        studentid: this.loginUserData.getUserId,
      }
    );
  }
}
