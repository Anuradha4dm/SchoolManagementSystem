import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-class-change',
  templateUrl: './class-change.component.html',
  styleUrls: ['./class-change.component.css'],
})
export class ClassChangeComponent implements OnInit {
  @ViewChild('formData', { static: true }) formDataRef: NgForm;

  currentGradeData: { grade: string; gradeid: number } = {
    grade: '',
    gradeid: 0,
  };

  constructor(
    private nonacademicService: NonAcademicService,
    private alertMessageService: AlertMessageService
  ) {}
  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    this.nonacademicService
      .postUpdateStudentGrade(
        formData.value.move_class,
        formData.value.student_id
      )
      .subscribe(
        (data) => {
          if (data.update) {
            this.alertMessageService.competeAlert(
              `Student assign to ${formData.value.move_class} successfully..`
            );
          }
        },
        (error) => {
          this.alertMessageService.errorAlert('Update Faile ,try later....');
        },
        () => {
          this.formDataRef.reset();
        }
      );
  }

  getClass(studentid: string) {
    this.nonacademicService
      .getClassOfTheStudent(studentid.toUpperCase())
      .subscribe((data) => {
        this.currentGradeData.grade = data.grade;
        this.currentGradeData.gradeid = data.gradeid;
      });
  }

  onCansel() {
    this.formDataRef.reset();
  }
}
