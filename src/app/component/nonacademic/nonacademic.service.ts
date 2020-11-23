import { HttpClient, HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { LeaveData } from 'src/app/models/leavedata';
import { LastYearData, SubjectAnalysis } from 'src/app/models/teacher.model';

@Injectable({ providedIn: 'root' })
export class NonAcademicService {
  constructor(private httpClient: HttpClient) {}

  //Return all pending leave requests data 
  getPendingRequest() {
    return this.httpClient.get<LeaveData>(
      'http://localhost:3000/nonacademic/get-pending-request'
    );
  }

/*
  getPendingLeaveData() {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/get-pending-leaves'
    );
  }
*/
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
  
  findFreeClassTeachers() {
    return this.httpClient.get<{
      teachers: { teacherid: string; username: string }[];
    }>('http://localhost:3000/nonacademic/get-free-class-teacher');
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

  //this method is used to add result of the advance level examination
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

  //Return year by year student count related to grade and count
  getOrdinaryLeveChartOne(result: string, count: number) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('result', result.toUpperCase());
    parameterSet = parameterSet.append('count', count.toString());

    return this.httpClient.get<{meyear: number,count: number}[]>(
      'http://localhost:3000/nonacademic/ol-chart-one',
      {
        params: parameterSet,
      }
    );
  }

  getOrdinaryLeveChartTwo(year: number, subjectid: number) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('year', year.toString());
    parameterSet = parameterSet.append('subjectid', subjectid.toString());

    return this.httpClient.get<SubjectAnalysis>(
      'http://localhost:3000/nonacademic/ol-chart-two',
      {
        params: parameterSet,
      }
    );
  }

  //Return past year student grade and count total
  getOrdinaryLeveChartThree(year: number, result: string, count: number) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('year', year.toString());
    parameterSet = parameterSet.append('result', result);
    parameterSet = parameterSet.append('count', count.toString());

    return this.httpClient.get<LastYearData[]>(
      'http://localhost:3000/nonacademic/ol-chart-three',
      {
        params: parameterSet,
      }
    );
  }

  //return student count year by year releted to grade and stream
  getAdvanceLevelChartOne(result: string, stream: string, count: number) {
    return this.httpClient.post<{meyear: number,count: number}[]>(
      'http://localhost:3000/nonacademic/al-chart-one',
      {
        result: result,
        count: count,
        stream: stream,
      }
    );
  }

  //return grade count related to subject and year
  getAdvanceLevelChartTwo(year: number, subjectid: number) {
    return this.httpClient.post<SubjectAnalysis>(
      'http://localhost:3000/nonacademic/al-chart-two',
      {
        year: year,
        subjectid: subjectid,
      }
    );
  }

  //return student details related to given result
  getAdvanceLevelChartThree(
    year: number,
    result: string,
    count: number,
    stream: string
  ) {
    return this.httpClient.post<LastYearData[]>(
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
