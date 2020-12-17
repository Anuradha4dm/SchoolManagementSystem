import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'ng2-charts';

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

  @ViewChild('formData', { static: true }) formData: NgForm;

  //stundet grade
  gradeVal: number = 11;
  stream: string = null;

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
    subjectDes: 'Click subject to see infomation ',
    teacherName: '',
    imagePath: '../assets/img/mike.jpg',
  };
  //special message

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

        if (!this.studentData.grade.includes('_')) {
          this.alertMessageService.errorAlert('You Have No Class Assgign');
          this.formData.invalid;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );

    //categorize subjects
    var arr = this.studentData.grade.split('_');

    this.gradeVal = +this.studentData.grade.split('_')[0];
    this.stream = arr[arr.length-1];

    //ths is the grades in between  grade 6-9
    if (this.gradeVal >= 6 && this.gradeVal <= 9) {
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
    if (this.gradeVal == 10 || this.gradeVal == 11) {
      this.isOptionalList1 = true;
      this.optionalList1 = [
        'commerce',
        'geography',

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

    //Mathematics students

    if (this.gradeVal >= 12 && this.stream === 'MATH') {
      this.subjectSet1 = ['combine_mathematics', 'physics'];
      this.isOptionalList1 = true;
      this.optionalList1 = ['Chemistry', 'infomation_technology'];
    }

    if (this.gradeVal >= 12 && this.stream === 'BIO') {
      this.subjectSet1 = ['biology', 'chemistry'];
      this.isOptionalList1 = true;
      this.optionalList1 = ['physics', 'agriculture'];
    }

    if (this.gradeVal >= 12 && this.stream === 'ART') {
      this.isOptionalList1 = true;
      this.optionalList1 = [
        'economics',
        'roman_civilization',
        'home_economics',
        'divinity',
        'ict',
      ];
      this.isOptionalList2 = true;
      this.optionalList2 = [
        'english',
        'statistics',
        'political_science',
        'art',
      ];
      this.isOptionalList3 = true;
      this.optionalList3 = [
        'french',
        'accounts',
        'geography',
        'logic',
        'sinhala',
        'hindi',
      ];
    }
    if (this.gradeVal >= 12 && this.stream === 'COM') {
      this.isOptionalList1 = true;
      this.optionalList1 = [
        'economics',
        'roman_Civilization',
        'home_economics',
        'divinity',
        'ict',
      ];
      this.isOptionalList2 = true;
      this.optionalList2 = [
        'english',
        'statistics',
        'political_science',
        'art',
      ];
      this.isOptionalList3 = true;
      this.optionalList3 = [
        'french',
        'accounts',
        'geography',
        'logic',
        'sinhala',
        'hindi',
      ];
    }

    if (this.gradeVal >= 12 && this.stream === 'TEC') {
      this.subjectSet1 = ['science_for_teachnology'];
      this.isOptionalList1 = true;
      this.optionalList1 = ['engineering_tech', 'bio_system_tech'];
      this.isOptionalList2 = true;
      this.optionalList2 = [
        'english',
        'information_technology',
        'economics',
        'geography',
        'commerce',
        'accounting',
        'art',
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
      this.studentProfileService
        .addSubjectOrdinaryLevel({
          studentid: this.studentData.studentid,
          optional1: data.value.optional1,
          optional2: data.value.optional2,
          optional3: data.value.optional3,
          grade: this.studentData.grade,
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

    if (this.gradeVal == 12 || this.gradeVal == 13) {
      var request: {
        studentid: string;
        grade: string;
        subject1: string;
        subject2: string;
        subject3: string;
      } = {
        studentid: '',
        subject1: '',
        subject2: '',
        subject3: '',
        grade: '',
      };

      if (this.stream === 'MATH' || this.stream === 'BIO') {
        request.subject1 = this.subjectSet1[0];

        request.subject2 = this.subjectSet1[1];
        request.subject3 = data.value.optional1;
      }

      if (this.stream === 'ART' || this.stream === 'COM') {
        request.subject1 = data.value.optional1;
        request.subject2 = data.value.optional2;
        request.subject3 = data.value.optional3;
      }

      if (this.stream === 'TEC') {
        request.subject1 = this.subjectSet1[0];
        request.subject2 = data.value.optional2;
        request.subject3 = data.value.optional3;
      }

      this.studentProfileService
        .addSubjectAdvanceLevel({
          ...request,
          studentid: this.studentData.studentid,
          grade: this.studentData.grade,
        })
        .subscribe(
          (data: { update: boolean }) => {
            if (data.update) {
              this.alertMessageService.competeAlert(
                'Subjects Add Successful...'
              );
            }
          },
          (error) => {
            this.alertMessageService.errorAlert(error.error.message);
          }
        );
    }
  }

  onSubjectCkick(element) {
    this.fetchDataAndPopulate(element.target.value, this.studentData.grade);
  }

  onChangeListItemOption2(subjectValue: string) {
    console.log(subjectValue);
    this.fetchDataAndPopulate(subjectValue, this.studentData.grade);
  }

  onChangeListItemOption1(subjectValue: string) {
    this.fetchDataAndPopulate(subjectValue, this.studentData.grade);
  }

  onChangeListItemOption3(subjectValue: string) {
    this.fetchDataAndPopulate(subjectValue, this.studentData.grade);
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
        (error) => {
          this.alertMessageService.errorAlert(error.error.message);
        },
        () => {}
      );
  }
}
