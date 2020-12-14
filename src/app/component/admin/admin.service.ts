import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  postNewStudentData(submissionData) {
    return this.httpClient.post<{ newstudent: boolean }>(
      'http://localhost:3000/admin/new-student-profile',
      submissionData
    );
  }

  getNewStudentId() {
    return this.httpClient.get<{ fetch: Boolean; Id: string }>(
      'http://localhost:3000/admin/get-new-student-id'
    );
  }

  //To add new teacher to database
  addNewTeacher(formdata) {
    return this.httpClient.post(
      'http://localhost:3000/admin/add-new-teacher',
      formdata
    );
  }

  //get all counts teacher,nonacademic,class and students
  getAllCounts() {
    return this.httpClient.get<{
      studentCount: number;
      classCount: number;
      nonCount: number;
      teacherCount: number;
    }>('http://localhost:3000/admin/get-all-count');
  }

  //create new class
  createNewClass(grade: string) {
    return this.httpClient.post(
      'http://localhost:3000/admin/create-new-class',
      {
        className: grade,
      }
    );
  }

  //return all class list with details
  getClassList() {
    return this.httpClient.get<
      {
        classid: number;
        grade: string;
        teacher: { teacherid: string; firstname: string; lastname: string };
      }[]
    >('http://localhost:3000/admin/get-class-list');
  }
}
