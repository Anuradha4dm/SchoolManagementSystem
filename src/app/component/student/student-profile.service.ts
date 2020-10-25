import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//import user define modules
import { Student } from 'src/app/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  logInStudentId: string = 'ST_1';

  studentPerformace: {
    prasent: string;
    absent: string[];
    awards: string[];
  } = {
    prasent: '12',
    absent: ['2020/01/02', '2020/02/23'],
    awards: ['winner 1', 'winner 2'],
  };

  constructor(private httpClient: HttpClient) {}

  getStudentPerfomance(id: string) {
    //get Data form the database
    return this.studentPerformace;
  }

  getStudent(id: string) {
    //need to access data on the data base

    return this.httpClient
      .get<{ fetch: boolean; studentData: Student }>(
        'http://localhost:3000/student/profile/' + id
      )
      .pipe(
        map((responseDate) => {
          return responseDate.studentData;
        })
      );
  }

  updateStudentProfile(id: string, newData: Student) {
    //new to send data to database and update
  }

  getStudentId() {}

  addNewProfile(newProfile: Student) {}
}
