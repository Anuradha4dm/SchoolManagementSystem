import { Component, OnInit } from '@angular/core';
import { idText } from 'typescript';

@Component({
  selector: 'app-edit-term-results',
  templateUrl: './edit-term-results.component.html',
  styleUrls: ['./edit-term-results.component.css']
})
export class EditTermResultsComponent implements OnInit {

  selectedTerm: number;
  show:boolean = false;

  constructor() {
 
   }

  ngOnInit(): void {
    //to remove start

    this.selectedTerm=1; 

    //to remove end
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
