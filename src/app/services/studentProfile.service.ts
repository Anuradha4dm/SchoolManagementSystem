import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  private student: Student = new Student(
    '123',
    'dumy surname',
    'dumy name1',
    'dumy name2',
    'dumy_email@gamail.com',
    'dumy username1',
    '12',
    'male',
    '9',
    'dumy class teaacher',
    '2000',
    '2000-01-02',
    'dumy_addressline1',
    'dumy addressline2',
    'dumy addressline3',
    'dumy city',
    'dumy 077123123'
  );

  constructor() {}

  getStudent() {
    //need to access data on the data base
    return this.student;
  }

  updateStudentProfile(id: string, newData: Student) {
    //new to send data to database and update
  }

  getStudentId() {
    return this.student._id;
  }
}
