import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-alresults',
  templateUrl: './add-alresults.component.html',
  styleUrls: ['./add-alresults.component.css']
})
export class AddALresultsComponent implements OnInit {
  @Input() year;
  show:boolean = false;
  page:number = 1; //for pagination
  results:string[]=[];

  //to contain grade count
  Acount:number =0;
  Bcount:number =0;
  Ccount:number =0;
  Scount:number =0;
  Wcount:number =0;

  constructor() { }

  ngOnInit(): void {
  }

  //Execute when result change
  onChange(value,i){
    this.results[i]=value;

    this.Acount=this.results.filter((data)=>data=='A').length;
    this.Bcount=this.results.filter((data)=>data=='B').length;
    this.Ccount=this.results.filter((data)=>data=='C').length;
    this.Scount=this.results.filter((data)=>data=='S').length;
    this.Wcount=this.results.filter((data)=>data=='W').length;
  }

  onRowClick(){
    this.show = true;
  }
}
