import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentListService {
  private dayAttendanceSubmit: { isDone: boolean; date: Date } = {
    isDone: false,
    date: new Date(1997, 1, 1),
  };

  //need to get the date also in the database which the last update od the attendence
  //that need for a particular class last updated atendence need to be retrive
  //class id need to be taken from the class teacher log

  private studentList: {
    _id: string;
    username: string;
    mobile: string;
    email: string;
    isOnline?: boolean;
  }[] = [
    {
      _id: '123',
      username: 'student 1',
      mobile: '077123456',
      email: 'email@gmail.com',
    },
    {
      _id: '124',
      username: 'student 2',
      mobile: '077123456',
      email: 'email@gmail.com',
      isOnline: false, //this can be avalilable or remove
    },
    {
      _id: '125',
      username: 'student 3',
      mobile: '077123456',
      email: 'email@gmail.com',
      isOnline: false, //this can be avalilable or remove
    },
  ];

  constructor(private httpClient: HttpClient) {}

  getStudentList() {
    //need to get data from student_day_attendance
    //struncture in paper
    return {
      StudentList: this.studentList,
      lastUpdate: this.dayAttendanceSubmit,
    };
  }

  getStudentListForAttendance() {
    //need to get data from tha database
    //get data from grade table
    //structure [ {_id: string;username: string; mobile: string;email: string;isOnline: boolean}]
    return this.studentList;
  }

  updateStudentOnline(listForUpdatePrform: {}) {
    var count = 0;
    var len = this.studentList.length;

    Object.keys(listForUpdatePrform).forEach((key) => {
      if (count < len) {
        if ((this.studentList[count]._id = key)) {
          this.studentList[count].isOnline = listForUpdatePrform[key];
          count++;
        } else {
          console.log('error');
        }
      }
    });
  }

  getDayAttendenceSubmit() {
    if (this.dayAttendanceSubmit.date.getDate() > new Date().getDate()) {
      this.dayAttendanceSubmit = { isDone: false, date: null };
    }

    return this.dayAttendanceSubmit;
  }

  setDayAttendenceSubmit(isDone: boolean, date: Date) {
    this.dayAttendanceSubmit.isDone = isDone;
    this.dayAttendanceSubmit.date = date;
  }
}
