import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentProfileService } from '../student-profile.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AddSubjectResolverService
  implements Resolve<{ studentid: string; grade: string }> {
  constructor(private studentProfileService: StudentProfileService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<{ studentid: string; grade: string }>
    | Promise<{ studentid: string; grade: string }>
    | { studentid: string; grade: string } {
    return this.studentProfileService
      .getStudent(this.studentProfileService.logInStudentId)
      .pipe(
        map((data: Student) => {
          return { studentid: data._id, grade: data.grade };
        })
      );
  }
}
