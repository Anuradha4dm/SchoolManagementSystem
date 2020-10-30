import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//import user define modules
import { Student } from 'src/app/models/student.model';
import { UserLogInService } from '../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  logInStudentId: string = null; //this need to be taken form the log in compoentn
  loginStudentData: Student = null;

  studentPerformace: {
    prasent: string;
    absent: string[];
    awards: string[];
  } = {
    prasent: '12',
    absent: ['2020/01/02', '2020/02/23'],
    awards: ['winner 1', 'winner 2'],
  };

  constructor(
    private httpClient: HttpClient,
    private userLoginService: UserLogInService
  ) {
    this.logInStudentId = this.userLoginService.logInUserData._id;
  }

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

  updateStudentProfile(newData) {
    return this.httpClient.post(
      'http://localhost:3000/student/edit-profile/' + this.logInStudentId,
      newData
    );
  }

  getSelectSubjectInfomation(subjectname: string, grade: string) {
    return this.httpClient.get<{
      subjectId: number;
      subjectName: string;
      subjectDes: string;
      teacherName: string;
      imagePath: string;
    }>(
      'http://localhost:3000/student/getsubjectinfo/' +
        subjectname +
        '/' +
        grade
    );
  }

  getStudentId() {}

  addNewProfile(newProfile: Student) {}

  addSubjectsPrimary(postData: {
    studentid: string;
    grade: string;
    optional1: string;
  }) {
    this.httpClient
      .post('http://localhost:3000/student/addsubjectprimary', postData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  getRegisteredSubjectList() {
    return this.httpClient.get<{
      query: boolean;
      dataArray: [
        {
          subjectId: string;
          subjectName: string;
          teacherId: string;
          teacherName: string;
          teacherEmail: string;
        }
      ];
    }>('http://localhost:3000/student/get-subject-list/ST_1');
  }
}
