import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  leaveData={
    category: String,
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    leavesTaken: Number,
    leavesLeft: Number 
  }
  //need current logged user's those details teacher or non academic only

  constructor() { }
}
