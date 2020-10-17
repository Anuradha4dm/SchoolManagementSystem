import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StudentListService } from '../../teacher/student-list.service';

interface StudentList {
  _id: string;
  username: string;
  mobile: string;
  email: string;
  isOnline?: boolean;
}

@Injectable({ providedIn: 'root' })
export class GetStudentListForAttendenceResolver
  implements Resolve<StudentList[]> {
  constructor(private studentListService: StudentListService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<StudentList[]> | Promise<StudentList[]> | StudentList[] {
    return this.studentListService.getStudentListForAttendance();
  }
}
