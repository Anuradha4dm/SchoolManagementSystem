import { ElementSchemaRegistry } from '@angular/compiler';
import { Student } from '../models/student.model';

export class StudentService {
  private prasentStudentList: string[] = [];
  private absendStudentList: string[] = [];

  private students: Student[] = [
    new Student(
      '123',
      'surname',
      'name1',
      'name2',
      'email@gamail.com',
      'username1',
      '12',
      'male',
      '9',
      'addressline1',
      'addressline2',
      'addressline3',
      'city',
      '077123123',
      false
    ),
    new Student(
      '123',
      'surname2',
      'name12',
      'name22',
      'email@gamail.com',
      'username1',
      '12',
      'male',
      '9',
      'addressline12',
      'addressline22',
      'addressline32',
      'city',
      '077123123',
      false
    ),
  ];

  constructor() {}

  addStudentToPresentList(id: string) {
    this.prasentStudentList.push(id);
    console.log(this.prasentStudentList);
  }
  removeStudentInPresentList(id: string) {
    this.prasentStudentList.splice(this.prasentStudentList.indexOf(id), 1);
    console.log(this.prasentStudentList);
  }

  addStudentToAbsentList(id: string) {
    this.absendStudentList.push(id);
    console.log(this.absendStudentList);
  }

  removeStudentInAbsentList(id: string) {
    this.prasentStudentList.splice(this.prasentStudentList.indexOf(id), 1);
    console.log(this.absendStudentList);
  }

  getStudentListForAttendence() {
    let studentList: {
      _id: string;
      username: string;
      isOnline: boolean;
    }[] = [
      { _id: '123', username: 'student 1', isOnline: false },
      { _id: '124', username: 'student 2', isOnline: false },
      { _id: '125', username: 'student 3', isOnline: false },
      { _id: '126', username: 'student 4', isOnline: false },
      { _id: '127', username: 'student 5', isOnline: false },
      { _id: '128', username: 'student 6', isOnline: false },
    ];

    return studentList;
  }

  getStudentClassList() {
    let studentList: {
      _id: string;
      username: string;
      mobile: string;
      email: string;
      isOnline: boolean;
    }[] = [
      {
        _id: '123',
        username: 'damith',
        mobile: '077123456',
        email: 'email@gmail.com',
        isOnline: false,
      },
      {
        _id: '123',
        username: 'damith',
        mobile: '077123456',
        email: 'email@gmail.com',
        isOnline: false,
      },
      {
        _id: '123',
        username: 'damith',
        mobile: '077123456',
        email: 'email@gmail.com',
        isOnline: false,
      },
    ];

    return studentList;
  }
}
