import { Component, Input, OnInit } from '@angular/core';
import { UserLogInService } from '../../homepage/login/user-login.service';
import { NonAcademicService } from '../nonacademic.service';

@Component({
  selector: 'app-add-alresults',
  templateUrl: './add-alresults.component.html',
  styleUrls: ['./add-alresults.component.css']
})
export class AddALresultsComponent implements OnInit {
  @Input() year;
  loggedUserID:string;
  show:boolean = false;
  page:number = 1; //for pagination
  results:string[]=[];

  //to contain grade count
  Acount:number = 0;
  Bcount:number = 0;
  Ccount:number = 0;
  Scount:number = 0;
  Wcount:number = 0;

  constructor(
    private userLoginService: UserLogInService,
    private nonService: NonAcademicService
  ) { }

  ngOnInit(): void {
    this.userLoginService.userAuthData.subscribe((userData) => {
      this.loggedUserID = userData.getUserId;
    });
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
    this.nonService.getSubjectDataForResultAddition("ST_1",2020)
      .subscribe((data)=>{
        console.log(data);
      });
  }

  onSubmit(value){
    this.nonService.addAdvanceLevelResults("NAC_1",123456,2020,23,43,"Maths",2,value)
      .subscribe();
      console.log(value);
  }
}
