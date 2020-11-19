import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-alresults',
  templateUrl: './add-alresults.component.html',
  styleUrls: ['./add-alresults.component.css']
})
export class AddALresultsComponent implements OnInit {
  @Input() year;
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }

}
