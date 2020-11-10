import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {

  constructor(private httpClient: HttpClient) {}

  getStaffData(id: string, year: number) {
    return this.httpClient.post('http://localhost:3000/common/get-leave-profile-data', {
      id: id,
      year: year,
    });
  }

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

  //required methods start
  getUserDetails(id: string){
    //need that user's
      /* 
        full name,leaves available,leaves taken,category,role,email,phone
      */
     //from teacher or non academic profile table 
  }

  getPreviousLeaves(id: string){
    //need that user's
      /*
        leave number,date for leave,type,status
      */
     // for all leaves from the leaverequest table
  }

  getAllLeaveData(){
    //need 
      /*
        leave number,user_id,type,date for leave,description
      */
     // for all leaves that has status pending from leaverequest table
  }

  updateLeaveStatus(leaveID: number,status: string){
    //need to update the relavent leave's status to "rejected" or "approved"
    //please remember to make the status field of leaverequest table to string type 
    //no need two fields in leaverequest table for teacherid and nonacaid
  }
//required methods end
}
