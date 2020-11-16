import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeService } from 'ng2-charts';

@Injectable({ providedIn: 'root' })
export class NonAcademicService {
  constructor(private httpClient: HttpClient) {}

  getPendingRequest() {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/get-pending-request'
    );
  }

  getClassTeacherForClassHandler(className: string) {
    return this.httpClient.get<{
      fullname: string;
      email: string;
      teacherid: string;
      qualifications: string;
      image: string;
    }>('http://localhost:3000/nonacademic/get-class-teacher/' + className);
  }

  findFreeClassTeachers() {
    return this.httpClient.get<{
      teachers: { teacherid: string; username: string }[];
    }>('http://localhost:3000/nonacademic/get-free-class-teacher');
  }

  updateClassProperties(submitData: FormData) {
    return this.httpClient.post<{ success: boolean }>(
      'http://localhost:3000/nonacademic/update-class-handler',
      submitData
    );
  }

  sendNotification(formData) {
    return this.httpClient.post<{ notification: boolean }>(
      'http://localhost:3000/nonacademic/add-notification',
      formData
    );
  }

  getClassOfTheStudent(studentid: string) {
    return this.httpClient.get<{ grade: string; gradeid: number }>(
      'http://localhost:3000/nonacademic/get-class-student/' + studentid
    );
  }

  postUpdateStudentGrade(
    moveClass: string,
    studentid: string,
    nonacademicid: string
  ) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/nonacademic/update-class-student',
      {
        moveclass: moveClass.toUpperCase(),
        studentid: studentid.toUpperCase(),
        nonacademicid: nonacademicid,
      }
    );
  }

  subjectReset(studentid: string) {
    return this.httpClient.get<{ update: boolean }>(
      'http://localhost:3000/nonacademic/reset-student-subjects/' + studentid
    );
  }

  getPendingLeaveData() {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/get-pending-leaves'
    );
  }

  getListOfSubjectsTeachedByTeacher(teacherid: string) {
    return this.httpClient.get<{
      subjectlist: {
        subjectid: number;
        subjectname: string;
        assigndate: Date;
        grade: string;
      }[];
    }>(
      'http://localhost:3000/nonacademic/get-teacher-subject-list/' + teacherid
    );
  }
}
