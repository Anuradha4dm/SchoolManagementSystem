import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {

  constructor(private httpClient: HttpClient) {}

  //return staff member's personal and leave data when parse the year and id 
  /*getStaffData(id: string, year: number) {
    return this.httpClient.post('http://localhost:3000/common/get-leave-profile-data', {
      id: id,
      year: year,
    });
  }*/

  //make new leave
  makeNewLeaveRequest(id: string, date: string, type: number, desctiption) {
    return this.httpClient.post(
      'http://localhost:3000/common/new-leave-request',
      {
        id: id,
        date: date,
        type: type,
        description: desctiption,
      }
    );
  }
}
