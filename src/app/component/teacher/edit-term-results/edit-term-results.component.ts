import { Component, OnInit } from '@angular/core';
import { idText } from 'typescript';

@Component({
  selector: 'app-edit-term-results',
  templateUrl: './edit-term-results.component.html',
  styleUrls: ['./edit-term-results.component.css']
})
export class EditTermResultsComponent implements OnInit {

  selectedYear: number; //must initialize to first year of the teacher
  selectedClass: string;
  selectedTerm: number;
  show:boolean = false;


  classList:{
    year: number,
    class: string
  }[]; // must assign teacher years and class list on init method
 
  constructor() {
 
   }

  ngOnInit(): void {
    //to remove start
    this.classList = [{
      year: 2010,
      class: "11_D"
    },
    {
      year: 2012,
      class: "8_C"
    }
    ];

    this.selectedYear=this.classList[0].year; 
    this.selectedClass=this.classList[0].class;
    this.selectedTerm=1; 

    //to remove end
  }

  onYearChange($event){
    this.selectedYear=$event.target.options[$event.target.selectedIndex].text;
  }

  onTermChange(){
    //should pass selected year,term and class to
  }

  onRowClick(){
    //should pass idText,term and year
    this.show=!this.show;
  }

  onEditResultsClick(){
    //need to parse edited subject list
  }

}
