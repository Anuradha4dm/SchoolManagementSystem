import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students = [];
  lastAttendanceupdate: { isDone: boolean; date: Date };
  constructor(private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.students = data['studentList'].StudentList;
      this.lastAttendanceupdate = data['studentList'].lastUpdate;
    });

    if (!this.lastAttendanceupdate.isDone) {
      this.toastr.info(
        '<span class="now-ui-icons ui-1_bell-53"></span> For Today Attendance Is Not Mark ',
        '',
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-top-center',
        }
      );
    }
  }
}
