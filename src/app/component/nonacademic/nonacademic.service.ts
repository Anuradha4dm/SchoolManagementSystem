import { HttpClient, HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LeadingComment } from '@angular/compiler';
import { map } from 'rxjs/operators';
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

  //update the leave status in leave table
  handleLeaves(
    leaveid: number,
    answer: boolean,
    leavetype: number,
    message: string
  ) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/answer-pending-leave',
      {
        leaveid: leaveid,
        answer: answer,
        leavetype: leavetype,
        message: message,
      }
    );
  }

  /*
  getPendingLeaveData() {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/get-pending-leaves'
    );
  }
*/
  //return teacher assigned subject with grades
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

  //return teachers that have no class
  findFreeClassTeachers() {
    return this.httpClient.get<{
      teachers: { teacherid: string; username: string }[];
    }>('http://localhost:3000/nonacademic/get-free-class-teacher');
  }

  //not used
  getClassTeacherForClassHandler(className: string) {
    return this.httpClient.get<{
      fullname: string;
      email: string;
      teacherid: string;
      qualifications: string;
      image: string;
    }>('http://localhost:3000/nonacademic/get-class-teacher/' + className);
  }

  //not working can remove
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

  getAllNotifications() {
    return this.httpClient.get<{
      notificationList: {
        notificationid: string;
        from: string;
        expire: Date;
        message: string;
        publisher: string;
        to: string;
        title: string;
        attachmentpath: string;
        createdAt: Date;
        updatedAt: Date;
      }[];
    }>('http://localhost:3000/nonacademic/get-all-notifications');
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
    year: number,
    indexnumber: number,
    studentid: string,
    shy: number,
    type: boolean,
    grade: string,
    stream: string,
    subjectnames: string[]
  ) {
    return this.httpClient.post<{
      registration: boolean;
      subjectRegister: boolean;
    }>('http://localhost:3000/nonacademic/registration-exam', {
      year: year,
      indexnumber: indexnumber,
      studentid: studentid,
      shy: shy,
      type: type,
      subjectnames: subjectnames,
      class: grade,
      stream: stream
    });
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
    parameterSet = parameterSet.append('count', count.toString());

    return this.httpClient.get<{ count: number; meyear: number }[]>(
      'http://localhost:3000/nonacademic/ol-chart-one',
      {
        params: parameterSet,
      }
    );
  }

  getOrdinaryLeveChartTwo(year: string, subjectname: string) {
    var parameterSet = new HttpParams();
    parameterSet = parameterSet.append('year', year);
    parameterSet = parameterSet.append('subjectname', subjectname);

    return this.httpClient.get<{
      acount: number;
      bcount: number;
      ccount: number;
      scount: number;
      wcount: number;
    }>('http://localhost:3000/nonacademic/ol-chart-two', {
      params: parameterSet,
    });
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
    return this.httpClient.post<{ meyear: number; count: number }[]>(
      'http://localhost:3000/nonacademic/al-chart-one',
      {
        result: result,
        count: count,
        stream: stream,
      }
    );
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

  //return ol and al results related to any year
  getMainExamResults(year: number, type: number) {
    return this.httpClient.post<{ result: any[] }>(
      'http://localhost:3000/nonacademic/get-main-exam-results',
      {
        year: year,
        type: type,
      }
    );
  }

  //get subject data of al and ol when give student
  getSubjectDataForResultAddition(studentid: string, year: number) {
    const paramsSet = new HttpParams().set('year', year.toString());

    return this.httpClient.get<{
      subjects: { mesubjectis: number; mesubjectname: string }[];
      studentname: string;
    }>(
      'http://localhost:3000/nonacademic/get-subjects-result-add/' + studentid,
      {
        params: paramsSet,
      }
    );
  }

  //return grade count related to subject and year
  getAdvanceLevelChartTwo(year: number, subjectname: string) {
    return this.httpClient.post<SubjectAnalysis>(
      'http://localhost:3000/nonacademic/al-chart-two',
      {
        year: year,
        subjectname: subjectname,
      }
    );
  }

  getAdvanceLevelChartThree(
    year: number,
    result: string,
    count: number,
    stream: string
  ) {
    return this.httpClient.post<[]>(
      'http://localhost:3000/nonacademic/al-chart-three',
      {
        result: result,
        year: year,
        stream: stream,
        count: count,
      }
    );
  }

  //this gives the list of student for registred
  getRegisteredStudentListOfBothExams(year: number, type: boolean) {
    return this.httpClient.post<{
      class: string;
      indexnumber: number;
      studentid: string;
      stream: string;
    }>('http://localhost:3000/nonacademic/get-student-list-main-exam', {
      type: type,
      year: year,
    });
  }

  //this will give th answer to the pending leaves
  answerForPensdingLeaves(
    answer: boolean,
    nonacademicid: string,
    leaveid: number,
    message: string
  ) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/answer-pending-leave',
      {
        nonacademicid: nonacademicid,
        leaveid: leaveid,
        answer: answer,
        message: message,
      }
    );
  }

  //message need to pass only for rejecting the request otherwise pass null empty string
  updateNotification(formData) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/update-notification',

      formData
    );
  }

  deletePostedNotification(notificationid: number) {
    console.log(notificationid);
    return this.httpClient.get<{ delete: boolean }>(
      'http://localhost:3000/nonacademic/delete-notification/' + notificationid
    );
  }

  getPendingAdvanceLevelRequest() {
    return this.httpClient
      .get<{
        dataset: {
          requestid: number;
          stream: string;
          allcount: boolean;
          mathresult: boolean;
          sinhalaresult: boolean;
          viewcount: number;
          state: number;
          createdAt: Date;
          studentId: string;
          stateString: string;
        }[];
      }>('http://localhost:3000/nonacademic/get-advance-level-stream-register')
      .pipe(
        map((dataArray) => {
          const dataHandler = dataArray.dataset.map((data) => {
            if (data.state === 0) {
              data.stateString = 'Reject';
            }
            if (data.state === 1) {
              data.stateString = 'Allowed';
            }
            if (data.state === 2) {
              data.stateString = 'Pending...';
            }

            return data;
          });

          return { dataset: dataHandler };
        })
      );
  }

  responseForTheRequestedAdvanceLevelClass(
    answer: number,
    requestid: number,
    nonacademicid: string,
    studentid: string,
    message?: string,
    classname?: string
  ) {
    return this.httpClient.post<{ udpaterecode: boolean }>(
      'http://localhost:3000/nonacademic/respose-advance-levl-registration',
      {
        answer: answer,
        requestid: requestid,
        nonacademicid: nonacademicid,
        studentid: studentid,
        message: message,
        classname: classname,
      }
    );
  }

  getOrdinaryLevelStudentListForRegister() {
    return this.httpClient.get<{
      studentList: {
        firstname: string;
        lastname: string;
        _id: string;
        class: { grade: string };
      }[];
    }>(
      'http://localhost:3000/nonacademic/get-ol-student-list-for-registration'
    );
  }

  getAdvanceLevelStudentListForRegister() {
    return this.httpClient
      .get<{
        studentList: {
          firstname: string;
          lastname: string;
          _id: string;
          class: { grade: string };
          stream: string;
        }[];
      }>(
        'http://localhost:3000/nonacademic/get-al-student-list-for-registration'
      )
      .pipe(
        map((data) => {
          var findStream: string;
          const responceData = data.studentList.map((student) => {
            var arr=student.class.grade.split('_');

            findStream = student.class.grade.split('_')[arr.length-1];

            if (findStream === 'MATH') {
              student.stream = 'Physical';
            } else if (findStream === 'TEC') {
              student.stream = 'Technology';
            } else if (findStream === 'BIO') {
              student.stream = 'Biology';
            } else if (findStream === 'ART') {
              student.stream = 'Art';
            } else {
              student.stream = 'Commerce';
            }

            return student;
          });

          return responceData;
        })
      );
  }
  //use to change the class teacher
  changeClassTeacher(newTeacherID: string, classID: number) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/change-class-teacher',
      {
        newTeacherID: newTeacherID,
        classID: classID,
      }
    );
  }

  //return teacher list relted to subject
  getTeacherListBySubject(subjectname: string) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/get-teacher-by-subject',
      {
        subjectName: subjectname,
      }
    );
  }

  addTeacherSubjects(grade: string, subjectname: string, teacherid: string) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/add-teacher-subject',
      {
        grade: grade,
        subjectname: subjectname,
        teacherid: teacherid,
      }
    );
  }

  //return subject list that assigned to teachers
  getClassRegisteredSubjects(grade: string) {
    return this.httpClient.post(
      'http://localhost:3000/nonacademic/get-class-registered-subjects',
      {
        class: grade,
      }
    );
  }

  //get non academic profile data
  getNonAcademicProfileData(id: string) {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/profile-data/' + id
    );
  }

  //used to update non academic profile
  updateNonProfile(formData){
      return this.httpClient.post('http://localhost:3000/nonacademic/update-profile',formData)
  }

  //get student subejct list when they are going to register for main exams
  getStudentSubjectListForRegistration(studentid: string, examtype: string) {
    const paramsData = new HttpParams().append('examtype', examtype);

    return this.httpClient.get<{subjects:[]}>(
      'http://localhost:3000/nonacademic/get-student-registered-subjects/' +
        studentid,
      {
        params: paramsData,
      }
    );
  }

  //used to add timetable for classes and teachers
  addTimetables(formData){
      return this.httpClient.post('http://localhost:3000/nonacademic/add-timetable',formData);
  }
}
