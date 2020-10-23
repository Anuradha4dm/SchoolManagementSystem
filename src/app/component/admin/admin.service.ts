import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  addNewProfile(newStudentUserData) {
    return this.http.post(
      'http://localhost:3000/admin/new-profile',
      newStudentUserData
    );
  }
}
