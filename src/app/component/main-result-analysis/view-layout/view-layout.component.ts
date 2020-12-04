import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.css']
})
export class ViewLayoutComponent implements OnInit {
  exam:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
