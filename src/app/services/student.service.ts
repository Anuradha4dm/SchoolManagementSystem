import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentList: {};

  constructor() {}

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

  setStudentStateOnline(_id: string, state: boolean) {}
}
