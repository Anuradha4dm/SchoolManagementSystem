import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
})
export class StudentAttendenceComponent implements OnInit {
  students: {
    _id: string;
    username: string;
    mobile: string;
    email: string;
    isOnline: boolean;
  }[] = [];

  date: string = new Date().toUTCString();
  doneSubmition: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private confirmationDialogService: ConfirmationDialogService,
    private studentListService: StudentListService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.students = data['studentList'];
    });
    this.doneSubmition = this.studentListService.getDayAttendenceSubmit().isDone;
  }

  onSubmit(formData: NgForm) {
    this.doneSubmition = true;
    this.studentListService.setDayAttendenceSubmit(true, new Date());
    ////sent directly this onbect
    console.log(formData.value);

    this.studentListService.updateStudentOnline(formData.value);

    //this message need to appeat after form submissin completion
    this.toastr.info(
      '<span class="now-ui-icons ui-1_bell-53"></span> Done Submition For ' +
        this.date,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: 'toast-top-center',
      }
    );
  }

  onReSubmitbtnClick(formData) {
    this.confirmationDialogService
      .confirm(
        'Please confirm...',
        'Do you really want to resubmit the attendance?'
      )
      .then((confirmed) => {
        if (confirmed) {
          this.doneSubmition = true;
          ////sent directly this onbect
          console.log(formData.value);

          this.studentListService.updateStudentOnline(formData.value);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  onCansel() {
    //move to home page whan cansel click
  }
}
