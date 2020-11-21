import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-al-analysis',
  templateUrl: './al-analysis.component.html',
  styleUrls: ['./al-analysis.component.css']
})
export class AlAnalysisComponent implements OnInit {
  page: number =1; //for pagination
  show: boolean =false; //for student list hide and show
  year: number =new Date().getFullYear()-1;
  grades: string[] = ['A','B','C','S','W'];
  counter: number[] = [0,1,2,3];
  streams: string[] = ["Maths","Bio","Art","Commerce","Tech"]


    //Subject wise analysis details here
    public gradeCount = [10,20,30,40,50];
    public gradeLabel = ['A','B','C','S','W'];
  
    //Count wise analysis details here
    resultCount=[18,45,7];
    resultLabel=['2019','2018','2017'];
  
  
    public myLegend="helo";
    public myLabel=['A','B','C'];
    public myData=[100,200,300];
    public myType='doughnut';
    public myOption={
      scaleShowVerticalLines: false,
      responsive: true,
    }

  constructor() { }

  ngOnInit(): void {
  }

  //Execute when analysis button click
  onAnalysisClick(){

  }

  //Execute when students button click
  getStudents(){
    this.show = !this.show;
  }

}
