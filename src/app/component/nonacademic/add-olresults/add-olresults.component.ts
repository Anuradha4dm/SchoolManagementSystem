import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-olresults',
  templateUrl: './add-olresults.component.html',
  styleUrls: ['./add-olresults.component.css']
})
export class AddOLresultsComponent implements OnInit {
  year:number = new Date().getFullYear()-1;
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }

}
