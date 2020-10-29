import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css'],
})
export class ViewSubjectsComponent implements OnInit {
  subjectListObj: { subjectname: string; teacherid: string }[] = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.subjectListObj = data['subjectList'].dataArray;
      },
      (err) => {},
      () => {
        console.log('complete');
      }
    );
  }
}
