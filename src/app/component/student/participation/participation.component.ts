import { Component, OnInit } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';
import { AttendenceService } from './attendence.service';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css'],
})
export class ParticipationComponent implements OnInit {
  isAbsent: boolean = false;

  public gradientFillMain;
  public gradientFillChart1;

  attendenceData: {
    monthattendence: number[];
    presentage: number;
    totalpresents: number;
    absentDates: string[];
  } = null;

  //overall attendace
  public ctx;
  public canvas: any;
  public chartColor;

  public mainChartType;
  public mainChartData: Array<any>;
  public mainChartColor: Array<any>;
  public mianChartOption: any;
  public mainChartLabels: Array<any>;

  //month chart
  public chart1Type;
  public char1Data: Array<any>;
  public chart1Options: any;
  public chart1Lables: Array<any>;
  public chart1Color: Array<any>;

  constructor(private attendenceService: AttendenceService) {}

  ngOnInit(): void {
    this.attendenceService.getMiainAttendenceChartData().subscribe(
      (attendenceData) => {
        this.attendenceData = attendenceData;
      },
      (error) => {},
      () => {
        this.chartColor = '#FFFFFF';
        this.canvas = document.getElementById('bigDashboardChart');
        this.ctx = this.canvas.getContext('2d');

        this.gradientFillMain = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.ctx.height = 500;
        this.gradientFillMain.addColorStop(1, 'rgba(38, 153, 0, 0.60)');
        this.gradientFillMain.addColorStop(0, 'rgba(64, 255, 0, 0.9)');

        this.mainChartLabels = [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUl',
          'AUG',
          'SET',
          'OCT',
          'NOV',
          'DEC',
        ];

        this.mainChartType = 'bar';
        this.mainChartData = [
          {
            label: 'Num Of Present',

            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,

            borderWidth: 2,
            data: this.attendenceData.monthattendence,
          },
        ];
        this.mainChartColor = [
          {
            backgroundColor: this.gradientFillMain,
            borderColor: this.chartColor,
            pointBorderColor: this.chartColor,
            pointBackgroundColor: '#2c2c2c',
            pointHoverBackgroundColor: '#2c2c2c',
            pointHoverBorderColor: this.chartColor,
          },
        ];

        this.mainChartColor = [
          {
            backgroundColor: this.gradientFillMain,
            borderColor: this.chartColor,
            pointBorderColor: this.chartColor,
            pointBackgroundColor: '#2c2c2c',
            pointHoverBackgroundColor: '#2c2c2c',
            pointHoverBorderColor: this.chartColor,
          },
        ];

        this.mianChartOption = {
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 0,
              bottom: 0,
            },
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest',
          },
          legend: {
            position: 'bottom',
            fillStyle: '#FFF',
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: 'rgba(255,255,255,0.4)',
                  fontStyle: 'bold',
                  max: 24,
                  stepSize: 2,
                  beginAtZero: true,
                },
                gridLines: {
                  drawTicks: true,
                  drawBorder: false,
                  display: true,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: 'transparent',
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: 'transparent',
                  display: true,
                },
                ticks: {
                  padding: 10,
                  fontColor: 'rgba(255,255,255,0.4)',
                  fontStyle: 'bold',
                },
              },
            ],
          },
        };
      }
    );

    //month chart
  }

  showDates() {
    this.isAbsent = !this.isAbsent;
  }
}
