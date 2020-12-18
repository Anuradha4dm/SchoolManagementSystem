import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

//import user define modules
import { Student } from 'src/app/models/student.model';
import { UserLogInService } from '../homepage/login/user-login.service';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  logInStudentid: string = null; //this need to be taken form the log in compoentn

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
    this.userLoginService.userAuthData.subscribe((data) => {
      this.logInStudentid = data.getUserId;
    });
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
        }),
        tap((studentData) => {
          this.loginStudentData = studentData;
        })
      );
  }

  updateStudentProfile(newData) {
    return this.httpClient.post(
      'http://localhost:3000/student/edit-profile/' + this.logInStudentid,

      newData
    );
  }

  getSelectSubjectInfomation(subjectname: string, grade: string) {
    return this.httpClient.post<{
      subjectId: number;
      subjectName: string;
      subjectDes: string;
      teacherName: string;
      imagePath: string;
    }>('http://localhost:3000/student/getsubjectinfo', {
      grade: grade,
      subjectname: subjectname,
    });
  }

  getStudentId() {}

  addNewProfile(newProfile: Student) {}

  addSubjectsPrimary(postData: {
    studentid: string;
    grade: string;
    optional1: string;
  }) {
    return this.httpClient.post(
      'http://localhost:3000/student/addsubjectprimary',
      postData
    );
  }

  addSubjectOrdinaryLevel(postData: {
    studentid: string;
    grade: string;
    optional1: string;
    optional2: string;
    optional3: String;
  }) {
    return this.httpClient.post(
      'http://localhost:3000/student/add-subject-ordinaty-level',
      postData
    );
  }

  addSubjectAdvanceLevel(postData: {
    studentid: string;
    grade: string;
    subject1: string;
    subject2: string;
    subject3: string;
  }) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/student/add-subject-advance-level',
      postData
    );
  }

  getRegisteredSubjectList(studentid: string) {
    return this.httpClient.get<{
      query: boolean;
      update: string;
      dataArray: [
        {
          subjectId: string;
          subjectName: string;
          teacherId: string;
          teacherName: string;
          teacherEmail: string;
          update: string;
        }
      ];
    }>('http://localhost:3000/student/get-subject-list/' + studentid);
  }

  viewResultOfSpecificStudent(formdata) {
    return this.httpClient.post<{
      studentname: string;
      average: number;
      place: number;
      message: string;
      update: string;
      resultarray: { subject: string; marks: number; grade: string }[];
    }>('http://localhost:3000/student/view-result', formdata);
  }

  getLogInStudentData() {}

  getSportsList(studentid: string) {
    return this.httpClient.get<{
      sports: { sportname: string; allow: boolean }[];
    }>('http://localhost:3000/student/get-sports/' + studentid);
  }

  addSports(sportsData) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/student/add-sports',
      sportsData
    );
  }
}
