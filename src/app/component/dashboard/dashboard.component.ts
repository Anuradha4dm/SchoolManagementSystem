import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //populating data
  xData: string[] = [];
  yData: number[] = [];

  public gradientFill;
  public ctx;
  public canvas: any;
  public chartColor;

  public lineBigDashboardChartType;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartColors: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    //getting data form backend
    this.dashboardService.getMainBoardDetails().subscribe(
      (data) => {
        this.xData = data.xData;
        this.yData = data.yData;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.chartColor = '#FFFFFF';
        this.canvas = document.getElementById('bigDashboardChart');
        this.ctx = this.canvas.getContext('2d');

        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

        this.lineBigDashboardChartLabels = [
          '2016 1T',
          '2016 2T',
          '2016 3T',
          '2017 1T',
          '2017 2T',
          '2017 3T',
        ];

        this.lineBigDashboardChartType = 'line';
        this.lineBigDashboardChartData = [
          {
            label: 'Average',

            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,

            borderWidth: 2,
            data: this.yData,
          },
        ];
        this.lineBigDashboardChartColors = [
          {
            backgroundColor: this.gradientFill,
            borderColor: this.chartColor,
            pointBorderColor: this.chartColor,
            pointBackgroundColor: '#2c2c2c',
            pointHoverBackgroundColor: '#2c2c2c',
            pointHoverBorderColor: this.chartColor,
          },
        ];

        this.lineBigDashboardChartOptions = {
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
                  max: 100,
                  stepSize: 10,
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
  }
}
