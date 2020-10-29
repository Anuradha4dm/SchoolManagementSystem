import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentProfileService } from '../student-profile.service';

@Injectable({ providedIn: 'root' })
export class GetRegisteredSubjectList
  implements
    Resolve<{
      date: string;
      dataArray: [{ subjectName: string; teacherId: string }];
    }> {
  constructor(private userProfileSeeervice: StudentProfileService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<{
        date: string;
        dataArray: [{ subjectName: string; teacherId: string }];
      }>
    | Promise<{
        date: string;
        dataArray: [{ subjectName: string; teacherId: string }];
      }>
    | {
        date: string;
        dataArray: [{ subjectName: string; teacherId: string }];
      } {
    return this.userProfileSeeervice.getRegisteredSubjectList();
  }
}
