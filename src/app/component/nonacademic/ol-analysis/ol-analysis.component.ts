import { Component, OnInit } from '@angular/core';
import { LastYearData } from 'src/app/models/teacher.model';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';
import { SubjectListsService } from '../subject-lists.service';

@Component({
  selector: 'app-ol-analysis',
  templateUrl: './ol-analysis.component.html',
  styleUrls: ['./ol-analysis.component.css'],
})
export class OlAnalysisComponent implements OnInit {
  page: number = 1; //for pagination
  show: boolean = false; //to show and hide student list;
  analysis: boolean = false; //to check done the analysis
  year: number = new Date().getFullYear() - 1;
  pastYearOLData;
  subjectList; //contain all subject names of O/L
  grades: string[] = ['A', 'B', 'C', 'S', 'W'];
  counter: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  //Year by year analysis chart data here
  allYearData = [];
  allYearLabels = [];
  allYearGrade = 'A';
  allYearCount = 9;

  //Past yaer count wise analysis chart data here
  pastYearData = [0, 0];
  pastYearLabels = ['Result count', 'Rest count'];
  pastYearGrade = 'A';
  pastYearCount = 9;
  pastYearStudentData;

  //Subject analysis chart data here
  subjectData = [0,0,0,0,0];
  subjectLabels = ['A count', 'B count', 'C count', 'S count', 'W count'];
  subjectYear = this.year;
  subjectName="mathematics";

  myOption = {
    legend:{
      labels:{
        fontSize: 16,
        fontColor: 'white'
      }
    }
  };// this is used for chart labels styles
  
  /*Subject wise analysis details here

  public myLegend = 'helo';
  public myLabel = ['A', 'B', 'C'];
  public myData = [100, 200, 300];
  public myType = 'doughnut';

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
    private nonService: NonAcademicService,
    private subjectService: SubjectListsService
  ) {}

  ngOnInit(): void {
    this.allYearAnalysis(1);

    this.nonService.getMainExamResults(this.year, 0).subscribe((data) => {
      this.pastYearOLData = data.result;
      console.log(this.pastYearOLData);
    });

    this.subjectList=this.subjectService.getAllSubjectsOfGrade("11");
  }

  //Execute when year by year select box changes
  allYearAnalysis(value) {
      this.allYearData = [];
      this.allYearLabels = [];
  
      for(let i=0;i<10;i++){
        this.allYearLabels.push(this.year-i);
      }
  
      this.nonService.getOrdinaryLeveChartOne(this.allYearGrade, this.allYearCount).subscribe((data) => {
        data.map((content)=>{
          for(let i=0;i<this.allYearLabels.length;i++){
            if(content.meyear==this.allYearLabels[i])
              this.allYearData[i]=content.count;
            if(this.allYearData[i]==null)
              this.allYearData[i]=0
          }
        })
      });
  }

  //Execute when analysis button clicks
  pastYearAnalysis() {
    this.pastYearData = [];
    this.analysis = true;
    this.nonService
      .getOrdinaryLeveChartThree(
        this.year.toString(),
        this.pastYearGrade,
        this.pastYearCount.toString()
      )
      .subscribe((data) => {
        this.pastYearStudentData = data;
        this.pastYearData.push(this.pastYearStudentData.length);
        this.pastYearData.push(this.pastYearOLData.length-this.pastYearStudentData.length);
        console.log(data);
      });
  }

  subjectAnalysis(value) {
    this.subjectData = [];

    this.nonService
      .getOrdinaryLeveChartTwo(this.subjectYear.toString(),this.subjectName)
      .subscribe((data) => {
        this.subjectData.push(data.acount);
        this.subjectData.push(data.bcount);
        this.subjectData.push(data.ccount);
        this.subjectData.push(data.scount);
        this.subjectData.push(data.wcount);
      });
  }
}
