import { ConstantPool } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css'],
})
export class AddNewProfileComponent implements OnInit {
  @ViewChild('formData', { static: false }) formDataRef: NgForm;
  @ViewChild('userid', { static: false }) userid: ElementRef;

  adminLogin: boolean = false;
  studentLogin: boolean = false;
  teacherLoginn: boolean = false;
  nonAcademinLogin: boolean = false;

  classList: string[] = [
    '6_A',
    '6_B',
    '6_C',
    '6_D',
    '6_E',
    '7_A',
    '7_B',
    '7_C',
    '7_D',
    '7_E',
    '8_A',
    '8_B',
    '8_C',
    '8_D',
    '8_E',
    '9_A',
    '9_B',
    '9_C',
    '9_D',
    '9_E',
    '10_A',
    '10_B',
    '10_C',
    '10_D',
    '10_E',
    '11_A',
    '11_B',
    '11_C',
    '11_D',
    '11_E',
    '12_MATH',
    '12_BIO',
    '12_ART',
    '12_COM',
    '12_TEC',
    '13_MATH',
    '13_BIO',
    '13_ART',
    '13_COM',
    '13_TEC',
  ];

  //this is for generating the studnet id
  nextVal: string = '';
  generateid: boolean = true;

  //for image setup
  profilePic: any = '../../../../assets/img/profile.png';
  selectedFile: File = null;
  imageFileName: string = '';

  constructor(
    private adminService: AdminService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    const form = new FormData();

    console.log(formData.value.grade);

    form.append('grade', formData.value.grade);
    form.append('addressline1', formData.value.addressline1);
    form.append('addressline2', formData.value.addressline2);
    form.append('addressline3', formData.value.addressline3);
    form.append('password', formData.value.userid + 'pwd');
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
    form.append('imageData', this.selectedFile, this.imageFileName);

    this.adminService.postNewStudentData(form).subscribe(
      (result) => {
        console.log(result.newstudent);
        if (result.newstudent) {
          this.alertMessageService.competeAlert(
            'Student added Successfully...'
          );
        }
      },
      (error) => {
        this.alertMessageService.errorAlert(error.error.message);
      },
      () => {
        this.formDataRef.reset();
      }
    );
  }

  onChange(event) {
    const studentId = this.userid.nativeElement.value;
    this.selectedFile = <File>event.target.files[0];
    const extention = this.selectedFile.name.split('.')[1];

    this.imageFileName = studentId + '.' + extention;

    const file = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.profilePic = reader.result;
    };
  }

  getId() {
    this.adminService.getNewStudentId().subscribe(
      (result) => {
        this.nextVal = result.Id;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.generateid = false;
      }
    );
  }
}
