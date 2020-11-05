import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private userProfileSeeervice: StudentProfileService) {}

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
    return this.userProfileSeeervice.getRegisteredSubjectList();
  }
}
