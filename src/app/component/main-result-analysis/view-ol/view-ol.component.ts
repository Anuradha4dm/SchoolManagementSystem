import { Component, OnInit } from '@angular/core';
import { NonAcademicService } from '../../nonacademic/nonacademic.service';

@Component({
  selector: 'app-view-ol',
  templateUrl: './view-ol.component.html',
  styleUrls: ['./view-ol.component.css']
})
export class ViewOLComponent implements OnInit {
  selectedYear:number=2020;
  selectedShy: number=0;
  selectedStream: number;
  
  olData; //contain A/L exam resukts of selected year

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
    this.nonService.getMainExamResults(this.selectedYear,0).subscribe((data)=>{
      this.olData = data.result;
      console.log(this.olData);
    })
  }

  //Select student related to shy
  onShyFilter(){
    if(this.selectedShy!=0){
      this.nonService.getMainExamResults(this.selectedYear,0).subscribe((data)=>{
        this.olData=data.result.filter((element)=>{
          return element.shy==this.selectedShy;
        });
      })
    }
    else
      this.onYearChange();
   
  }

}
