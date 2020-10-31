import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentProfileService } from '../student-profile.service';
import { exhaustMap, map, take } from 'rxjs/operators';
import { UserLogInService } from '../../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class AddSubjectResolverService
  implements Resolve<{ studentid: string; grade: string }> {
  constructor(
    private userLoginService: UserLogInService,
    private studentProfileService: StudentProfileService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<{ studentid: string; grade: string }>
    | Promise<{ studentid: string; grade: string }>
    | { studentid: string; grade: string } {
    var id;
    this.userLoginService.userAuthData.subscribe((data) => {
      id = data.getUserId;
    });

    return this.studentProfileService.getStudent(id).pipe(
      map((data: Student) => {
        return { studentid: data._id, grade: data.grade };
      })
    );
  }
}
