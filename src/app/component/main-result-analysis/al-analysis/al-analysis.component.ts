import { Component, OnInit } from '@angular/core';
import { LastYearData } from 'src/app/models/teacher.model';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';

@Component({
  selector: 'app-al-analysis',
  templateUrl: './al-analysis.component.html',
  styleUrls: ['./al-analysis.component.css']
})
export class AlAnalysisComponent implements OnInit {
  page: number =1; //for pagination
  show: boolean =false; //for student list hide and show
  analysis: boolean=false; //for past year chart hide and show
  cutoff=1.3;
  year: number =new Date().getFullYear()-1;
  grades: string[] = ['A','B','C','S','W'];
  counter: number[] = [3,2,1,0];
  streams=["MATH"]

  //Year by year analysis details here
  yearStudentCount=[];
  yearLabels=[];
    yearGrade = "A"; 
    yearCount = 3;
    yearStream = "MATH";

  //Last year analysis detials here
  lastYearCount=[0,0];  
  lastYearLabels=["Result count","Total count"];
    pastYearData: LastYearData[];
    lastGrade="A";
    lastCount=3;
    lastStream="MATH";

  //Subject analysis chart data here
  subjectCount=[0,0,0,0,0];
  subjectLabels=['A count','B count','C count','S count','W count'];
    subjectId=2;
    subjectYear=this.year;
   
    public myLegend="helo";
    public myLabel=['A','B','C'];
    public myData=[100,200,300];
    public myType='doughnut';
    public myOption={
      scaleShowVerticalLines: false,
      responsive: true,
    }

  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    //Return student count related to strem and grade year by year
    this.nonService.getAdvanceLevelChartOne("A","MATH",3)
      .subscribe((data)=>{
        for(let i=0;i<data.length;i++){
          this.yearStudentCount.push(data[i].count);
          this.yearLabels.push(data[i].meyear);
        }
      });
  }

  //Execute when year analysis selection change
  yearAnalysis(value){
    this.yearStudentCount=[];
    this.yearLabels=[];

    this.nonService.getAdvanceLevelChartOne(this.yearGrade,this.yearStream,this.yearCount)
      .subscribe((data)=>{
        for(let i=0;i<data.length;i++){
          this.yearStudentCount.push(data[i].count);
          this.yearLabels.push(data[i].meyear);
          console.log(this.yearLabels);
          console.log(this.yearStudentCount);
        }
      });
  }

  //Execute when analysis button click
  onAnalysisClick(){
    this.lastYearCount=[];
    this.analysis = true;

    this.nonService.getAdvanceLevelChartThree(this.year,this.lastGrade,this.lastCount,this.lastStream)
    .subscribe((data)=>{
      this.pastYearData=data;
      this.lastYearCount.push(this.pastYearData.length);
      //this.lastYearCount.push(totalcount);
    });
  }

  //Execute when students button click
  getStudents(){
    this.show = !this.show;
  }

  subjectAnalysis(value){
    this.subjectCount=[];

    this.nonService.getAdvanceLevelChartTwo(this.subjectYear,this.subjectId)
      .subscribe((data)=>{
        this.subjectCount.push(data.acount);
        this.subjectCount.push(data.bcount);
        this.subjectCount.push(data.ccount);
        this.subjectCount.push(data.Scount);
        this.subjectCount.push(data.wcount);
      });
    }
}
