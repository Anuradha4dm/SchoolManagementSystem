import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StudentListService } from '../../teacher/student-list.service';

interface StudentListInfo {
  StudentList: {
    _id: string;
    username: string;
    mobile: string;
    email: string;
    isOnline?: boolean;
  }[];
  lastUpdate: { isDone: boolean; date: Date };
}

@Injectable({ providedIn: 'root' })
export class GetClassStudentListResolver implements Resolve<StudentListInfo> {
  constructor(private studentListService: StudentListService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<StudentListInfo> | Promise<StudentListInfo> | StudentListInfo {
    return this.studentListService.getStudentList();
  }
}
