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
  profilePic: any = '../assets/img/profile.png';

  //this is the new upload file data
  selectedFile: File = null;
  imageFileName: string;

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
        this.profilePic = 'http://localhost:3000/' + this.studentData.imagePath;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(formData) {
    const form = new FormData();

    form.append('grade', formData.value.grade);
    form.append('addressline1', formData.value.addressline1);
    form.append('addressline2', formData.value.addressline2);
    form.append('addressline3', formData.value.addressline3);

    form.append('age', formData.value.age);
    form.append('birthdate', formData.value.birthdate);
    form.append('classteacher', formData.value.classteacher);
    form.append('city', formData.value.city);
    form.append('mobile', formData.value.mobilenumber);
    form.append('email', formData.value.email);
    form.append('firstname', formData.value.firstname);
    form.append('gender', formData.value.gender);
    form.append('lastname', formData.value.lastname);
    form.append('startyear', formData.value.startyear);
    form.append('surname', formData.value.surname);
    form.append('userid', formData.value.userid);
    form.append('username', formData.value.username);

    if (!this.selectedFile) {
      form.append('imagepath', this.studentData.imagePath);
    } else {
      form.append('imageData', this.selectedFile, this.imageFileName);
    }

    this.studentProfileService.updateStudentProfile(form).subscribe(
      (result) => {
        console.log('update success');
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigate(['userprofile']);
      }
    );
  }

  onReset() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }

  onChange(event) {
    this.selectedFile = event.target.files[0];
    const extention = this.selectedFile.name.split('.')[1];
    this.imageFileName = this.studentId + '.' + extention;

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }
}
