import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css'],
})
export class ViewResultComponent implements OnInit {
  averageMarks: number;

  resultReviewArray: { subject: string; marks: number; grade: string }[] = [
    { subject: 'Mathemetics', marks: 88, grade: 'A' },
    { subject: 'Science', marks: 88, grade: 'A' },
    { subject: 'Sinhala', marks: 88, grade: 'A' },
    { subject: 'History', marks: 88, grade: 'A' },
    { subject: 'Buddhist', marks: 88, grade: 'A' },
    { subject: 'IT', marks: 88, grade: 'A' },
    { subject: 'Wester Music', marks: 88, grade: 'A' },
    { subject: 'Commerce', marks: 88, grade: 'A' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
