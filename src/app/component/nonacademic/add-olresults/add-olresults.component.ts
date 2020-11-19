import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-olresults',
  templateUrl: './add-olresults.component.html',
  styleUrls: ['./add-olresults.component.css']
})
export class AddOLresultsComponent implements OnInit {
  @Input() year;
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(){
    this.show = true;
  }

}
