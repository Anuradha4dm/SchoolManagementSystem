import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
<<<<<<< HEAD
  constructor(private httpClient: HttpClient) {}

  postNewStudentData(submissionData: FormData) {
    return this.httpClient.post(
      'http://localhost:3000/admin/new-student-add',
      submissionData
=======
  constructor(private http: HttpClient) {}

  addNewProfile(newStudentUserData) {
    return this.http.post(
      'http://localhost:3000/admin/new-profile',
      newStudentUserData
>>>>>>> e0ce8596f98393a2af09cfd539a591e24c97e90e
    );
  }
}
