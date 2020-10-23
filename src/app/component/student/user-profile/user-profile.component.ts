import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentProfileService } from 'src/app/services/studentProfile.service';
import { StudentPerformanceService } from '../student-preformance.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  studentProfileData: Student;
  studentPerformance;

  specialAwards: string[] = ['Winner 1', 'winner 2', 'winner 3'];
  numOfAbsents: number;

  absentDates: string[] = [
    new Date().toDateString(),
    new Date().toDateString(),
    new Date().toDateString(),
  ];

  showDate: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService,
    private studentPerformanceService: StudentPerformanceService
  ) {}

  ngOnInit(): void {
    this.studentProfileData = this.studentProfileService.getStudent();
    this.studentPerformance = this.studentPerformanceService.getStudentPerfomance(
      this.studentProfileData._id
    );
  }

  toggleShowBtn() {
    this.showDate = !this.showDate;
  }

  onEditProfile() {
    this.router.navigate(['edit-profile', '123']);
  }
}
