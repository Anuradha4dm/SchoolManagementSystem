import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  postNewStudentData(submissionData: FormData) {
    return this.httpClient.post(
      'http://localhost:3000/admin/new-student-add',
      submissionData
    );
  }
}
