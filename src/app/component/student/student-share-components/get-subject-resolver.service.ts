import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, take } from 'rxjs/operators';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { StudentProfileService } from '../student-profile.service';

@Injectable({ providedIn: 'root' })
export class GetRegisteredSubjectList
  implements
    Resolve<{
      query: boolean;
      update: string;
      dataArray: [
        {
          subjectId: string;
          subjectName: string;
          teacherId: string;
          teacherName: string;
          teacherEmail: string;
        }
      ];
    }> {
  constructor(
    private userProfileService: StudentProfileService,
    private userLoginService: UserLogInService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<{
        query: boolean;
        update: string;
        dataArray: [
          {
            subjectId: string;
            subjectName: string;
            teacherId: string;
            teacherName: string;
            teacherEmail: string;
          }
        ];
      }>
    | Promise<{
        query: boolean;
        update: string;
        dataArray: [
          {
            subjectId: string;
            subjectName: string;
            teacherId: string;
            teacherName: string;
            teacherEmail: string;
          }
        ];
      }>
    | {
        query: boolean;
        update: string;
        dataArray: [
          {
            subjectId: string;
            subjectName: string;
            teacherId: string;
            teacherName: string;
            teacherEmail: string;
          }
        ];
      } {
    return this.userLoginService.userAuthData.pipe(
      take(1),
      exhaustMap((userData) => {
        return this.userProfileService.getRegisteredSubjectList(
          userData.getUserId
        );
      })
    );
  }
}
