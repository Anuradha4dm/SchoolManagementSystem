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
  stundetData: { studentid: string; grade: string } = {
    studentid: '',
    grade: '',
  };
  subjecRelatedData: {
    subjectName: string;
    subjectDes: string;
    teacherName: string;
    imagePath: string;
  } = {
    subjectName: '',
    subjectDes: '',
    teacherName: '',
    imagePath: '../assets/img/mike.jpg',
  };

  subjectSet1: string[] = [
    'Mathematics',
    'Sinhala',
    'English',
    'Science',
    'History',
  ];

  subjectFormData: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((studentData) => {
      this.stundetData.studentid = studentData.student.studentid;
      this.stundetData.grade = studentData.student.grade;
    });
  }

  onSubmitForm(data) {
    console.log(data.value);
  }

  onSubjectCkick(element) {
    this.studentProfileService
      .getSelectSubjectInfomation('Mathematices', '6_D')
      .subscribe((data) => {
        this.subjecRelatedData.subjectName = data.subjectName;
        this.subjecRelatedData.teacherName = data.teacherName;
        this.subjecRelatedData.subjectDes = data.subjectDes;
        this.subjecRelatedData.imagePath =
          'http://localhost:3000/' + data.imagePath;
      });
  }
}
