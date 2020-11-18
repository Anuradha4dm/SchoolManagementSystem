import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassStudentList, TeacherProfileData } from 'src/app/models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private httpClient: HttpClient) {}

  //return teacher profile data
  getTeacherProfileData(teacherid: string) {
    return this.httpClient.get<TeacherProfileData>(
      'http://localhost:3000/teacher/get-teacher-profile/' + teacherid
    );
  }

  //return class students list of data when give teacher's id
  getClassStudentList(teacherid: string) {
    return this.httpClient.get<ClassStudentList>(
      'http://localhost:3000/teacher/class-student-list/' + teacherid);
  }

  //return subject list of student when parse id and grade
  getSubjectsOfSpecificStudent(studentid: string, grade: string) {
    return this.httpClient.post<{
      subjectlist: { subjectid: string; subjectname: string }[];
    }>('http://localhost:3000/teacher/get-student-subject', {
      grade: grade,
      studentid: studentid,
    });
  }

  //return students past results with marks
  getStudentPastResultForEdit(year: number, term: number, studentid: string) {
    return this.httpClient.post<{
      result: { subjectid: number; subjectname: string; mark: number }[];
    }>('http://localhost:3000/teacher/edit-results-get-previous', {
      year: year,
      term: term,
      studentid: studentid,
    });
  }

  //submit student results to the database
  addStudentResult(studentResult) {
    return this.httpClient.post(
      'http://localhost:3000/teacher/add-student-result',
      studentResult
    );
  }

  updateStudentResultAfterEdit(
    year: number,
    term: number,
    studentid: string,
    result: { subjectid: number; mark: number }
  ) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/teacher/update-student-result',
      {
        year: year,
        term: term,
        studentid: studentid,
        result: result,
      }
    );
  }
}
