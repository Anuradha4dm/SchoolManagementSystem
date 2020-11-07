import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private httpClient: HttpClient) {}

  getStudentListForAddResult(id: string) {
    return this.httpClient.get<{
      grade: string;
      studentListData: {
        _id: string;
        firstname: string;
        lastname: string;
      }[];
    }>('http://localhost:3000/teacher/class-student-list/' + id);
  }

  getSubjectsOfSpecificStudent(studentid: string, grade: string) {
    return this.httpClient.post<{
      subjectlist: { subjectid: string; subjectname: string }[];
    }>('http://localhost:3000/teacher/get-student-subject', {
      grade: grade,
      studentid: studentid,
    });
  }

  addStudentResult(studentResult){

  }
}
