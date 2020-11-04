import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  leaveData = {
    category: String,
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    leavesTaken: Number,
    leavesLeft: Number,
  };
  //need current logged user's those details teacher or non academic only

  constructor(private httpClient: HttpClient) {}

  getStaffData(id: string, year: number) {
    this.httpClient
      .post<{
        username: string;
        fullname: string;
        email: string;
        mobile: string;
        leaveData: {
          numberofleavetaken: number;
          takenleavedates: [];
          numberofpendingleave: number;
          pendingdatas: [];
        };
      }>('http://localhost:3000/common//get-profile-data', {
        id: id,
        year: year,
      })
      .subscribe((staffData) => {
        console.log(staffData);
      });
  }
}
