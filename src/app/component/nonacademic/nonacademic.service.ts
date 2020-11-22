import { HttpClient, HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  updateTeacherSubjectList(submitData: {
    teacherid: string;
    subjectListData: any;
  }) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/update-teacher-subject-list',
      {
        teacherid: submitData.teacherid,
        subjectList: submitData.subjectListData,
      }
    );
  }

  //this method is used to register student for the a/l or o/l examinations
  registerStudentsForExams(
    nonacademicid: string,
    year: number,
    indexnumber: number,
    studentid: string,
    shy: number,
    type: boolean,
    subjectnames: string[]
  ) {
    return this.httpClient.post<{
      registration: boolean;
      subjectRegister: boolean;
    }>('http://localhost:3000/nonacademic/registration-exam', {
      nonacademicid: nonacademicid,
      year: year,
      indexnumber: indexnumber,
      studentid: studentid,
      shy: shy,
      type: type,
      subjectnames: subjectnames,
    });
  }

  //this methos is used to add results of the ordinary level
  addOrdinaryLevelResults(
    nonacademicid: string,
    indexnumber: number,
    year: number,
    islandrank: number,
    districtrank: number,
    results: { mesubjectid: number; meresult: string }[]
  ) {
    return this.httpClient.post<{ resultaddtion: boolean }>(
      'http://localhost:3000/nonacademic/add-ordinary-level-results',
      {
        nonacademicid: nonacademicid,
        indexnumber: indexnumber,
        year: year,
        islandrank: islandrank,
        districtrank: districtrank,
        results: results,
      }
    );
  }

  addAdvanceLevelResults(
    nonacademicid: string,
    indexnumber: number,
    year: number,
    islandrank: number,
    districtrank: number,
    stream: string,
    zscore: number,
    results: { mesubjectid: number; meresult: string }[]
  ) {
    return this.httpClient.post<{ resultaddtion: boolean }>(
      'http://localhost:3000/nonacademic/add-advance-lavel-result',
      {
        nonacademicid: nonacademicid,
        indexnumber: indexnumber,
        year: year,
        islandrank: islandrank,
        districtrank: districtrank,
        stream: stream,
        zscore: zscore,
        results: results,
      }
    );
  }

  getSubjectDataForResultAddition(studentid: string, year: number) {
    const paramsSet = new HttpParams().set('year', year.toString());

    return this.httpClient.get<{
      responsedata: { mesubjectis: number; mesubjectname: string };
    }>(
      'http://localhost:3000/nonacademic/get-subjects-result-add/' + studentid,
      {
        params: paramsSet,
      }
    );
  }

  onSwitchClassOfStudentForTheYear(switchtype: string) {
    return this.httpClient.post<{ gradeUpdate: boolean }>(
      'http://localhost:3000/nonacademic/switch-class-students',
      {
        type: switchtype,
      }
    );
  }

  getOrdinaryLeveChartOne(result: string, count: number) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('result', result.toUpperCase());
    parameterSet = parameterSet.append('count', result.toUpperCase());

    return this.httpClient.get(
      'http://localhost:3000/nonacademic/ol-chart-one',
      {
        params: parameterSet,
      }
    );
  }

  getOrdinaryLeveChartTwo(year: string, subjectid: string) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('year', year);
    parameterSet = parameterSet.append('subjectid', subjectid);

    return this.httpClient.get(
      'http://localhost:3000/nonacademic/ol-chart-two',
      {
        params: parameterSet,
      }
    );
  }

  getOrdinaryLeveChartThree(year: string, result: string, count: string) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('year', year);
    parameterSet = parameterSet.append('result', result);
    parameterSet = parameterSet.append('count', count);

    return this.httpClient.get(
      'http://localhost:3000/nonacademic/ol-chart-three',
      {
        params: parameterSet,
      }
    );
  }

  getAdvanceLevelChartOne(result: string, stream: string, count: number) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/al-chart-one',
      {
        result: result,
        count: count,
        stream: stream,
      }
    );
  }

  getAdvanceLevelChartTwo(year: number, subjectid: number) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/al-chart-two',
      {
        year: year,
        subjectid: subjectid,
      }
    );
  }

  getAdvanceLevelChartThree(
    year: number,
    result: string,
    count: number,
    stream: string
  ) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/al-chart-three',
      {
        result: result,
        year: year,
        stream: stream,
        count: count,
      }
    );
  }
}
