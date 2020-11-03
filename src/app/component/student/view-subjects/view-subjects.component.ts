import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isConstructorDeclaration } from 'typescript';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.subjectListObj = data['subjectList'].dataArray;
      },
      (err) => {
        console.log(err.error.message);
      },
      () => {
        console.log('complete');
      }
    );
  }
}
