import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ol-analysis',
  templateUrl: './ol-analysis.component.html',
  styleUrls: ['./ol-analysis.component.css']
})
export class OlAnalysisComponent implements OnInit {
  page: number =1; //for pagination
  show: boolean =false; //for student list hide and show
  year: number =new Date().getFullYear()-1;
  grades: string[] = ['A','B','C','S','W'];
  counter: number[] = [0,1,2,3,4,5,6,7,8,9];

  //Subject wise analysis details here
  public gradeCount = [10,20,30,40,50];
  public gradeLabel = ['A','B','C','S','W'];

  //Count wise analysis details here
  resultCount=[30,100];
  resultLabel=['count','total'];


  public myLegend="helo";
  public myLabel=['A','B','C'];
  public myData=[100,200,300];
  public myType='doughnut';
  public myOption={
    scaleShowVerticalLines: false,
    responsive: true,
  }
  /*myColor = [
    {
      backgroundColor: 'silver',
      borderColor: 'red',
      pointBorderColor: 'brown',
      pointBackgroundColor: '#2c2c2c',
      pointHoverBackgroundColor: '#2c2c2c',
      pointHoverBorderColor: 'blue',
    },
  ];*/




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
