import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { NonAcademicService } from '../nonacademic/nonacademic.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  year=new Date().getFullYear();
  month=new Date().getMonth();
  date=new Date().getDate();
  day=new Date().toDateString().split(" ")[0];
  counts;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      this.counts=data;
    })
  }

}
