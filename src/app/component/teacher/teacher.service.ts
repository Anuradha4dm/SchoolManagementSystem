import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';
import {
  ClassStudentList,
  TeacherProfileData,
} from 'src/app/models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  examResultsOfAllSubjects: any[][];

  constructor(private httpClient: HttpClient) {}

  //return teacher profile data
  getTeacherProfileData(teacherid: string) {
    return this.httpClient.get<TeacherProfileData>(
      'http://localhost:3000/teacher/get-teacher-profile/' + teacherid
    );
  }

  //need to create a route for this
  updateTeacherProfile(teacherid: string, profileData) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/teacher/update-teacher-profile/' + teacherid,
      profileData
    );
  }

  //return class students list of data when give teacher's id
  getClassStudentList(teacherid: string) {
    return this.httpClient.get<ClassStudentList>(
      'http://localhost:3000/teacher/class-student-list/' + teacherid
    );
  }

  //used to check whether attendance is marked or not
  checkAttendanceStatus(date: Date) {
    return this.httpClient.post<{ mark: boolean }>(
      'http://localhost:3000/teacher/check-attendance-status',
      {
        date: date,
      }
    );
  }

  //add students attendance to database
  markStudentAttendence(date: Date, teacherid: string, submitdata: string) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/teacher/mark-attendence',
      {
        teahcerid: teacherid,
        date: date,
        submitdata: submitdata,
      }
    );
  }

  //add students attendance to database
  reSubmitStudentAttendance(date: Date, teacherid: string, submitdata: string) {
    return this.httpClient.post<{ update: boolean }>(
      'http://localhost:3000/teacher/attendence-resubmit',
      {
        teahcerid: teacherid,
        submitdata: submitdata,
        date: date,
      }
    );
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

  //submit student edited results to the database
  updateStudentResultAfterEdit(
    year: number,
    term: number,
    studentid: string,
    result: { subjectid: number; mark: number }[]
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

  //used to print result sheet
  printReport(formData) {
    return this.httpClient.post(
      'http://localhost:3000/teacher/print-report',
      formData
    );
  }

  //execute when e-report send
  sendEreport(formData) {
    return this.httpClient.post(
      'http://localhost:3000/teacher/send-report',
      formData
    );
  }

  //return students avarage related to grade and term
  postGetAverageDataWithStudent(year: number, term: number, grade: string) {
    return this.httpClient.post<{
      avarageData: {
        average: number;
        grade: string;
        place: number;
        term: number;
        year: number;
        _id: string;
      }[];
    }>('http://localhost:3000/teacher/get-average-data', {
      year: year,
      term: term,
      grade: grade,
    });
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

      const workbookName: string = workbook.SheetNames[0];
      const worksheet: XLSX.WorkSheet = workbook.Sheets[workbookName];

      this.examResultsOfAllSubjects = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });
    };

    reader.readAsBinaryString(target.files[0]);
    return true;
  }

  mapDataFormTheServiceToStudent(studentid: string, subjectidArray: number[]) {
    var resultArray: { subjectid: number; marks: any }[] = [];
    var index: number = 0;

    const resultList: any[] = this.examResultsOfAllSubjects.filter(
      (result: any[]) => {
        return result[0] === studentid;
      }
    );

    subjectidArray.forEach((subjectid: any) => {
      index = this.examResultsOfAllSubjects[0].indexOf(subjectid);

      resultArray.push({ subjectid: subjectid, marks: resultList[0][index] });
    });

    //relected student result are read
    console.log(resultArray);

    return resultArray;
  }

  sendTeacherNotifications(teacherid: string, selectedList, formData) {
    return this.httpClient.post(
      'http://localhost:3000/teacher/teacher-send-notifications',
      {
        teacherid: teacherid,
        list: selectedList,
        data: formData,
      }
    );
  }

  //return this month attendance of teacher
  getTeacherAttendance(id: string) {
    return this.httpClient.post<
      {
        year: number;
        month: number;
        day: number;
        present: Boolean;
      }[]
    >('http://localhost:3000/teacher/get-teacher-attendance', {
      teacherid: id,
    });
  }
}
