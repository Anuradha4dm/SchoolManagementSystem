import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { createThis, isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css'],
})
export class ViewSubjectsComponent implements OnInit {
  subjectListObj: {
    subjectid: string;
    subjectname: string;
    teacherid: string;
    teachername: string;
    teacheremail: string;
  }[] = null;

  update: string;

  constructor(
    private route: ActivatedRoute,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.subjectListObj = data['subjectList'].dataArray;
        this.update = data['subjectList'].update;
      },
      (err) => {
        console.log('sda');
      },
      () => {
        this.alertMessageService.competeAlert('Subject List Fetch Successfull');
      }
    );
  }
}
