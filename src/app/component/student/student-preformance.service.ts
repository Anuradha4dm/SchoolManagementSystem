import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentPerformanceService {
  studentPerformace: {
    prasent: string;
    absent: string[];
    awards: string[];
  } = {
    prasent: '12',
    absent: ['2020/01/02', '2020/02/23'],
    awards: ['winner 1', 'winner 2'],
  };

  constructor() {}

  getStudentPerfomance(id: string) {
    //get Data form the database
    return this.studentPerformace;
  }
}
