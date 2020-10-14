import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StudentService } from 'src/app/services/student.service';

interface StudentList {
  _id: string;
  username: string;
  mobile: string;
  email: string;
  isOnline: boolean;
}

@Injectable({ providedIn: 'root' })
export class GetClassStudentListResolver implements Resolve<StudentList[]> {
  constructor(private studentService: StudentService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<StudentList[]> | Promise<StudentList[]> | StudentList[] {
    return this.studentService.getStudentClassList();
  }
}
