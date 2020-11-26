import { Component, OnInit } from '@angular/core';
import { LastYearData } from 'src/app/models/teacher.model';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';

@Component({
  selector: 'app-ol-analysis',
  templateUrl: './ol-analysis.component.html',
  styleUrls: ['./ol-analysis.component.css']
})
export class OlAnalysisComponent implements OnInit {
  page: number =1; //for pagination
  show: boolean=false //to show and hide student list;
  analysis: boolean = false; //to check done the analysis
  year: number =new Date().getFullYear()-1;
  pastYearOLData;
  grades: string[] = ['A','B','C','S','W'];
  counter: number[] = [0,1,2,3,4,5,6,7,8,9];

  //Year by year analysis chart data here
  allYearData=[];
  allYearLabels=[];
    allYearGrade="A";
    allYearCount=0;

  //Past yaer count wise analysis chart data here
  pastYearData=[0,0];
  pastYearLabels=["Student Count of the result","Total student of the year"];
    pastYearGrade="A";
    pastYearCount=0;
    pastYearStudentData: LastYearData[];


  //Subject analysis chart data here
  subjectData=[];
  subjectLabels=[];
    subjectYear=this.year;
    subjectId;
  //Subject wise analysis details here
 

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


  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    this.allYearAnalysis(1);
    
    this.nonService.getMainExamResults(this.year,true).subscribe((data)=>{
      this.pastYearOLData=data;
    });
  }

  //Execute when year by year select box changes
  allYearAnalysis(value){
    this.allYearData=[];
    this.allYearLabels=[];

    this.nonService.getOrdinaryLeveChartOne(this.allYearGrade,this.allYearCount)
      .subscribe((data)=>{
        for(let i=0;i<data.length;i++){
          this.allYearData.push(data[i].count);
          this.allYearLabels.push(data[i].meyear);
        }
      });

  }

  //Execute when analysis button clicks
  pastYearAnalysis(){
    this.pastYearData=[];
    this.analysis = true;
    this.nonService.getOrdinaryLeveChartThree(this.year,this.pastYearGrade,this.pastYearCount)
      .subscribe((data)=>{
        this.pastYearStudentData=data;
        this.pastYearData.push(data.length);
        this.pastYearData.push(this.pastYearOLData.length);
        console.log(this.pastYearOLData.length);
      });
  }

  subjectAnalysis(value){
    this.subjectData=[];

    this.nonService.getOrdinaryLeveChartTwo(this.subjectYear,2)
      .subscribe((data)=>{
        this.subjectData.push(data.acount);
        this.subjectData.push(data.bcount);
        this.subjectData.push(data.ccount);
        this.subjectData.push(data.Scount);
        this.subjectData.push(data.wcount);
      });
  }

}
