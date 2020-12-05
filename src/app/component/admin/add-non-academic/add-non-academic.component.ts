import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-non-academic',
  templateUrl: './add-non-academic.component.html',
  styleUrls: ['./add-non-academic.component.css']
})
export class AddNonAcademicComponent implements OnInit {

  startYear=new Date().getFullYear();
  nonAcademicID;

  constructor(
    private adminService: AdminService,
    private alertService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      console.log(data);
      this.nonAcademicID = "NAC_"+(data.nonCount+1);
    })
  }

  //Add teacher details to database
  onSubmit(value){
 
  }
}
