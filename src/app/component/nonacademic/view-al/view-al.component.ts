import { Component, OnInit } from '@angular/core';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';

@Component({
  selector: 'app-view-al',
  templateUrl: './view-al.component.html',
  styleUrls: ['./view-al.component.css']
})
export class ViewALComponent implements OnInit {
  selectedYear:number=new Date().getFullYear();
  selectedShy: number=0;
  selectedStream: string="ALL";
  
  alData; //contain A/L exam resukts of selected year

  show:boolean = false;
  page:number=1;

  constructor(
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
   this.onYearChange();
  }

  //Execute when change the year
  onYearChange(){
    this.nonService.getMainExamResults(this.selectedYear,1).subscribe((data)=>{
      this.alData = data.result;
      console.log(this.alData);
    })
  }

  onShyFilter(){
    if(this.selectedShy!=0){
      this.nonService.getMainExamResults(this.selectedYear,1).subscribe((data)=>{
        this.alData=data.result.filter((element)=>{
          return element.shy==this.selectedShy;
        })
      });
    }
    else 
      this.onYearChange();
  }

  onStreamFilter(){
    if(this.selectedStream!="ALL"){
      this.nonService.getMainExamResults(this.selectedYear,1).subscribe((data)=>{
        this.alData=data.result.filter((element)=>{
          return element.stream==this.selectedStream;
        })
      })
    }
    else
      this.onYearChange();
  }
}
