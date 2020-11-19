import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-layout',
  templateUrl: './exam-layout.component.html',
  styleUrls: ['./exam-layout.component.css']
})
export class ExamLayoutComponent implements OnInit {

  selection:number = 3;
  selectedYear:number = new Date().getFullYear();
  exam:string = "G.C.E. A/L Examination";

  constructor() { }

  ngOnInit(): void {
  }

  //Execute when select box change
  onSelectChange(){
    if(this.selection==1 || this.selection==3)
      this.exam = "G.C.E. A/L Examination";
    else
      this.exam = "G.C.E. O/L Examination";
  }

}
