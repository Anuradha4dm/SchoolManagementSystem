import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counts;
  images=['img1.png','img2.jpg','img4.jpg','img5.jpg'];
  mission:string="Socialize an Individual with the development of"+ 
                  "educational competencies and Eco-friendly  through"+
                  "the excellent guidance to face all challenges"
  vision:string="To make a Superior with Virtue and Wisdom";
  
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllCounts().subscribe((data)=>{
      this.counts=data
    })
  }

}
