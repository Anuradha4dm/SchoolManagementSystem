import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  studentProfileData: Student = null;
  studentPerformance;

  registeredSubjects: string[] = [];
  isShowRegisteredSubject: boolean = false;

  specialAwards: string[] = ['Winner 1', 'winner 2', 'winner 3'];
  numOfAbsents: number;

  imagePath: string = '';

  absentDates: string[] = [
    new Date().toDateString(),
    new Date().toDateString(),
    new Date().toDateString(),
  ];

  showDate: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService
  ) {}

  ngOnInit(): void {
    this.studentProfileService
      .getStudent(this.studentProfileService.logInStudentId)
      .subscribe((result) => {
        this.studentProfileData = result;
        console.log(result);
        this.imagePath =
          'http://localhost:3000/' + this.studentProfileData.imagePath;
      });
  }

  toggleShowBtn() {
    this.showDate = !this.showDate;
  }

  onEditProfile() {
    this.router.navigate([
      'edit-profile',
      this.studentProfileService.logInStudentId,
    ]);
  }

  viewSubjectClick() {}
}
