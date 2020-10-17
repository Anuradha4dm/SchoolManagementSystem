import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

import { StudentProfileService } from '../../../services/studentProfile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  studentId: string;
  studentData: Student;

  constructor(
    private studentProfileService: StudentProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentId = params['id'];
    });

    this.studentData = this.studentProfileService.getStudent();
  }
  onSubmit(formData) {
    this.studentProfileService.updateStudentProfile(this.studentId, formData);
    this.router.navigate(['userprofile']);
  }

  onReset() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }
}
