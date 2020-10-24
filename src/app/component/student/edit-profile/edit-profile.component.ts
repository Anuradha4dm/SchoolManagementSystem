import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  studentId: string;
  studentData: Student;
  profilePic: string = '../assets/img/profile.png';

  constructor(
    private studentProfileService: StudentProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentId = params['id'];
    });

    this.studentProfileService.getStudent(this.studentId).subscribe(
      (result) => {
        this.studentData = result;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  onSubmit(formData) {
    this.studentProfileService.updateStudentProfile(this.studentId, formData);
    this.router.navigate(['userprofile']);
  }

  onReset() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }

  onProfilePictureChange() {
    console.log('data');
  }
}
