import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-alresults',
  templateUrl: './add-alresults.component.html',
  styleUrls: ['./add-alresults.component.css']
})
export class AddALresultsComponent implements OnInit {
  year:number = new Date().getFullYear()-1;
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }

}
