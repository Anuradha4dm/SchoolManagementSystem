import { Component, OnInit } from '@angular/core';
import { LastYearData } from 'src/app/models/teacher.model';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';
import { SubjectListsService } from '../subject-lists.service';

@Component({
  selector: 'app-al-analysis',
  templateUrl: './al-analysis.component.html',
  styleUrls: ['./al-analysis.component.css'],
})
export class AlAnalysisComponent implements OnInit {
  page: number = 1; //for pagination
  show: boolean = false; //for student list hide and show
  analysis: boolean = false; //for past year chart hide and show
  cutoff: number = 1.3;
  year: number = new Date().getFullYear() - 1;
  pastYearALData; //contain past year al data of students
  subjectList; //contain all subject related to A/L stream
  cutoffStream;
  cutoffList;
  grades: string[] = ['A', 'B', 'C', 'S', 'W'];
  counter: number[] = [3, 2, 1, 0];
  streams = ['Physical','Biology','Commerce','Art','Technology'];

  //Year by year analysis details here
  yearStudentCount = [];
  yearLabels = [];
  yearGrade = 'A';
  yearCount = 3;
  yearStream = 'Physical';

  //Last year analysis detials here
  lastYearCount = [0, 0];
  lastYearLabels = ['Result count', 'Other count'];
  pastYearData: LastYearData[];
  lastGrade = 'A';
  lastCount = 3;
  lastStream = 'MATH';

  //Subject analysis chart data here
  subjectCount = [0, 0, 0, 0, 0];
  subjectLabels = ['A count', 'B count', 'C count', 'S count', 'W count'];
  subjectName;
  subjectYear = this.year;

  public myLegend = 'helo';
  public myLabel = ['A', 'B', 'C'];
  public myData = [100, 200, 300];
  public myType = 'doughnut';
  public myOption = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  constructor(
    private nonService: NonAcademicService,
    private subjectService: SubjectListsService
  ) {}

  ngOnInit(): void {
    //Return student count related to strem and grade year by year
    this.yearAnalysis(1);

    this.nonService.getMainExamResults(this.year, 1).subscribe((data) => {
      this.pastYearALData = data.result;
    });
  }

  //Execute when year analysis selection change
  yearAnalysis(value) {    
      this.yearStudentCount = [];
      this.yearLabels = [];
  
      for(let i=0;i<10;i++){
        this.yearLabels.push(this.year-i);
      }
  
      this.nonService.getAdvanceLevelChartOne(this.yearGrade, this.yearStream, this.yearCount).subscribe((data) => {
        data.map((content)=>{
          for(let i=0;i<this.yearLabels.length;i++){
            if(content.meyear==this.yearLabels[i])
              this.yearStudentCount[i]=content.count;
            if(this.yearStudentCount[i]==null)
              this.yearStudentCount[i]=0
          }
        })
      });
  }

  //Execute when analysis button click
  onAnalysisClick() {
    this.lastYearCount = [];
    this.analysis = true;

    this.nonService
      .getAdvanceLevelChartThree(
        this.year,
        this.lastGrade,
        this.lastCount,
        this.lastStream
      )
      .subscribe((data) => {
        //this method has some error
        this.pastYearData = data;
        this.lastYearCount.push(this.pastYearData.length);
        this.lastYearCount.push(this.pastYearALData.length-this.pastYearData.length);
      });
  }

  //Execute when students button click
  getStudents() {
    this.show = !this.show;
  }

  subjectAnalysis(value) {
    this.subjectCount = [];

    this.nonService
      .getAdvanceLevelChartTwo(this.subjectYear, this.subjectName)
      .subscribe((data) => {
        this.subjectCount.push(data.acount);
        this.subjectCount.push(data.bcount);
        this.subjectCount.push(data.ccount);
        this.subjectCount.push(data.Scount);
        this.subjectCount.push(data.wcount);
      });
  }

  //exceute when subject section stream change
  onSubjectStreamChange(value){
    this.subjectList=this.subjectService.getAllSubjectsOfGrade(value);
  }

  cutoffFilter(value){
      this.cutoffList=this.pastYearALData.filter((student)=>{
        return student.stream==this.cutoffStream;
      });

  }

}
