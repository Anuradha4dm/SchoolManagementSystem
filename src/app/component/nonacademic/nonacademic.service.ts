import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NonAcademicService {
  constructor(private httpClient: HttpClient) {}

  getPendingRequest() {
    return this.httpClient.get(
      'http://localhost:3000/nonacademic/get-pending-request'
    );
  }
}
