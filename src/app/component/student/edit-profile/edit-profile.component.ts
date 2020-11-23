import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { AlertMessageService } from 'src/app/services/alert-message.service';
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

  gradeupdate: boolean = false;
  gradeAvalilable: string[] = [];

  //this is the new upload file data
  selectedFile: File = null;
  imageFileName: string;

  constructor(
    private studentProfileService: StudentProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentId = params['id'];
    });

    this.route.queryParams.subscribe((data) => {
      this.gradeupdate = data['gradeupdate'] == 'true' ? true : false;
    });

    this.studentProfileService.getStudent(this.studentId).subscribe(
      (result) => {
        this.studentData = result;
        this.profilePic = 'http://localhost:3000/' + this.studentData.imagePath;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.gradeAvalilable = this.gradeUpdateHandler(this.studentData.grade);
      }
    );
  }

  gradeUpdateHandler(classname: string) {
    var classSplit = classname.split('_');

    if (parseInt(classSplit[0]) < 11) {
      return [classname, 1 + parseInt(classSplit[0]) + '_' + classSplit[1]];
    } else if (parseInt(classSplit[0]) === 11) {
      return ['12_MATH', '12_BIO', '12_ART', '12_COM', '12_TEC'];
    } else {
      return [classname, 1 + parseInt(classSplit[0]) + '_' + classSplit[1]];
    }
  }

  onSubmit(formData) {
    const form = new FormData();

    form.append('addressline1', formData.value.addressline1);
    form.append('addressline2', formData.value.addressline2);
    form.append('addressline3', formData.value.addressline3);

    form.append('age', formData.value.age);
    form.append('birthdate', formData.value.birthdate);
    form.append('classteacher', formData.value.classteacher);
    form.append('city', formData.value.city);
    form.append('email', formData.value.email);
    form.append('firstname', formData.value.firstname);
    form.append('gender', formData.value.gender);
    form.append('lastname', formData.value.lastname);
    form.append('startyear', formData.value.startyear);
    form.append('surname', formData.value.surname);
    form.append('userid', formData.value.userid);
    form.append('username', formData.value.username);
    form.append('mobile', formData.value.mobile);

    if (!this.selectedFile) {
      form.append('imagepath', this.studentData.imagePath);
    } else {
      form.append('imageData', this.selectedFile, this.imageFileName);
    }

    if (this.gradeupdate) {
      form.append('grade', formData.value.Grade);
      form.append('gradeRequest', 'true');
    } else {
      form.append('grade', this.studentData.grade);
    }

    this.studentProfileService.updateStudentProfile(form).subscribe(
      (result) => {
        console.log('update success');
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.alertMessageService.competeAlert('Update Profile Success!');
        setTimeout(() => {
          this.router.navigate(['user', 'userprofile']);
        }, 1000);
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
