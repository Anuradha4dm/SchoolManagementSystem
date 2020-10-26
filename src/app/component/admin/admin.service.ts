import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  postNewStudentData(submissionData) {
    return this.httpClient.post(
      'http://localhost:3000/admin/new-student-profile',
      submissionData
    );
  }

  getNewStudentId() {
    return this.httpClient.get<{ fetch: Boolean; Id: string }>(
      'http://localhost:3000/admin/get-new-student-id'
    );
  }
}
