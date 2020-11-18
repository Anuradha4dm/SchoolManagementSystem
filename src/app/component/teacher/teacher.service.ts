import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';
import { TeacherProfileData } from 'src/app/models/teacher.model';
import { R3TargetBinder, Xliff } from '@angular/compiler';
import { reduceEachTrailingCommentRange } from 'typescript';

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

  //return subject list of student when parse id and grade
  getSubjectsOfSpecificStudent(studentid: string, grade: string) {
    return this.httpClient.post<{
      subjectlist: { subjectid: string; subjectname: string }[];
    }>('http://localhost:3000/teacher/get-student-subject', {
      grade: grade,
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

  getStudentPastResultForEdit(year: number, term: number, studentid: string) {
    return this.httpClient.post<{
      result: { subjectid: number; subjectname: string; mark: number }[];
    }>('http://localhost:3000/teacher/edit-results-get-previous', {
      year: year,
      term: term,
      studentid: studentid,
    });
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

  markStudentAttendence(teacherid: string, submitdata: string) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/teacher/mark-attendence',
      {
        teahcerid: teacherid,
        submitdata: submitdata,
      }
    );
  }

  xlsxFileReader(event) {
    const target: DataTransfer = <DataTransfer>event.target;

    if (target.files.length !== 1) {
      throw new Error('Can Not Select More Than One File At A Time');
    }

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binartString: string = e.target.result;

      const workbook: XLSX.WorkBook = XLSX.read(binartString, {
        type: 'binary',
      });
    };

    // reader.readAsBinaryString()
  }

  postGetAverageDataWithStudent(year: number, term: number, grade: string) {
    return this.httpClient.post(
      'http://localhost:3000/teacher/get-average-data',
      {
        year: year,
        term: term,
        grade: grade,
      }
    );
  }
}
