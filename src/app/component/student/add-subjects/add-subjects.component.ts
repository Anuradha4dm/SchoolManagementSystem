import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertMessageService } from 'src/app/services/alert-message.service';
import { StudentProfileService } from '../student-profile.service';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.css'],
})
export class AddSubjectsComponent implements OnInit {
  //this is use for the submition
  studentData: { studentid: string; grade: string } = {
    studentid: '',
    grade: '',
  };

  //stundet grade
  gradeVal: number = 11;

  //update value setup
  startTimeInMinutes: number = null;
  endimeInMinutes: number = null;
  timeInfo: string = null;

  //these give the infomation about clicked subject
  subjecRelatedData: {
    subjectid: number;
    subjectName: string;
    subjectDes: string;
    teacherName: string;
    imagePath: string;
  } = {
    subjectid: null,
    subjectName: '',
    subjectDes: '',
    teacherName: '',
    imagePath: '../assets/img/mike.jpg',
  };

  //combination related to the catogory
  subjectSet1: string[];

  isOptionalList1: boolean = false;
  optionalList1: string[] = [];

  isOptionalList2: boolean = false;
  optionalList2: string[] = [];

  isOptionalList3: boolean = false;
  optionalList3: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.startTimeInMinutes = new Date().getMinutes();
    //getting data from the resolver
    this.route.data.subscribe(
      (studentData) => {
        this.studentData.studentid = studentData['data'].studentid;
        this.studentData.grade = studentData['data'].grade;
        console.log(studentData);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );

    //categorize subjects
    var gradeVal = 11; //+this.studentData.grade.split('_')[0];
    //ths is the grades in between  grade 6-9
    if (gradeVal >= 6 && gradeVal <= 9) {
      this.isOptionalList1 = true;
      this.optionalList1 = ['estern_music', 'western_music', 'art', 'dancing'];
      this.subjectSet1 = [
        'mathemetics',
        'sinhala',
        'science',
        'history',
        'english',
        'tamil',
        'geography',
        'citizen education',
        'health',
        'pts',
        'religion',
      ];
    }
    //ths is the grades in between  grade 10-11
    if (gradeVal == 10 || gradeVal == 11) {
      this.isOptionalList1 = true;
      this.optionalList1 = [
        'commerce',
        'geography',
        'art',
        'citizen_education',
        'tamil',
        'hindi',
      ];
      this.isOptionalList2 = true;
      this.optionalList2 = [
        'western_music',
        'estern_music',
        'art',
        'dancing',
        'drama',
        'english_literature',
        'sinhala_literature',
      ];
      this.isOptionalList3 = true;
      this.optionalList3 = ['IT', 'health', 'agriculture'];
      this.subjectSet1 = [
        'mathematics',
        'sinhala',
        'science',
        'history',
        'english',
        'religion',
      ];
    }

    setInterval(() => {
      this.endimeInMinutes = new Date().getMinutes();
      let lastUpdate = this.endimeInMinutes - this.startTimeInMinutes;

      if (lastUpdate < 1) {
        this.timeInfo = 'Update less than minutes';
      } else {
        this.timeInfo = 'Update ' + lastUpdate + 'minutes ago';
      }
    }, 1000);
  }

  onSubmitForm(data) {
    if (this.gradeVal >= 6 && this.gradeVal <= 9) {
      this.studentProfileService
        .addSubjectsPrimary({
          studentid: this.studentData.studentid,
          grade: this.studentData.grade,
          optional1: data.optional1,
        })
        .subscribe(
          (data) => {
            console.log(data); //remove later
          },
          (error) => {
            this.alertMessageService.errorAlert(error.error.message);
          },
          () => {
            this.alertMessageService.competeAlert('Resistration Success');
          }
        );
    }

    if (this.gradeVal == 10 || this.gradeVal == 11) {
      console.log(data.value);
      this.studentProfileService
        .addSubjectOrdinaryLevel({
          studentid: this.studentData.studentid,
          optional1: data.optional1,
          optional2: data.optional2,
          optional3: data.optional3,
          grade: '11_D',
        })
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            this.alertMessageService.errorAlert(error.error.message);
          },
          () => {
            this.alertMessageService.competeAlert('Registration Success');
          }
        );
    }
  }

  onSubjectCkick(element) {
    this.fetchDataAndPopulate(element.target.value, '8_D');
  }

  onChangeListItemOption2(subjectValue: string) {
    console.log(subjectValue);
    this.fetchDataAndPopulate(subjectValue, '8_D');
  }

  onChangeListItemOption1(subjectValue: string) {
    this.fetchDataAndPopulate(subjectValue, '8_D');
  }

  assignValues(
    id: number,
    sname: string,
    tname: string,
    des: string,
    imagepath: string
  ) {
    this.subjecRelatedData.subjectid = id;
    this.subjecRelatedData.subjectName = sname;
    this.subjecRelatedData.teacherName = tname;
    this.subjecRelatedData.subjectDes = des;
    this.subjecRelatedData.imagePath = 'http://localhost:3000/' + imagepath;
  }

  fetchDataAndPopulate(subject: string, grade: string) {
    this.studentProfileService
      .getSelectSubjectInfomation(subject.toLocaleLowerCase(), grade)
      .subscribe(
        (data) => {
          this.assignValues(
            data.subjectId,
            data.subjectName,
            data.teacherName,
            data.subjectDes,
            data.imagePath
          );
        },
        (error) => {},
        () => {}
      );
  }
}
