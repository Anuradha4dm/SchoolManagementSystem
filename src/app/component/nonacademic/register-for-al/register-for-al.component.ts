import { Component, Input, OnInit } from '@angular/core';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-register-for-al',
  templateUrl: './register-for-al.component.html',
  styleUrls: ['./register-for-al.component.css'],
})
export class RegisterForALComponent implements OnInit {
  @Input() year;
  show: boolean = false;
  page: number = 1;

  studentList: {
    firstname: string;
    lastname: string;
    _id: string;
    class: { grade: string };
    stream: string;
  }[] = [];

  constructor(private nonService: NonAcademicService) {}

  ngOnInit(): void {
    this.nonService
      .getAdvanceLevelStudentListForRegister()
      .subscribe((data) => {
        this.studentList = data;
      });
  }

  onRowClick(id: string) {
    this.show = true;

    console.log(id);
  }
}
