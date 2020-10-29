import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  i;
  constructor(
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService
  ) {}

  ngOnInit(): void {
    this.startTimeInMinutes = new Date().getMinutes();
    //getting data from the resolver
    this.route.data.subscribe(
      (studentData) => {
        this.studentData.studentid = studentData.student.studentid;
        this.studentData.grade = studentData.student.grade;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );

    //categorize subjects
    var gradeVal = 7; //+this.studentData.grade.split('_')[0];
    if (gradeVal >= 6 && gradeVal <= 9) {
      this.isOptionalList1 = true;
      this.optionalList1 = ['buddhist', 'catalic', 'islam'];
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
    console.log(data.value);
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
