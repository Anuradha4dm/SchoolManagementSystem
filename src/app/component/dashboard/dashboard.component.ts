import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { WebSocketService } from 'src/app/services/websocket.service';

import { StudentModule } from '../student/student.module';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  //populating data
  xData: string[] = [];
  yData: number[] = [];
  loginUserData: StudentModule;
  subjectSubscription: Subscription;
  yearSubscription: Subscription;

  isChart1Show: boolean = false;
  chart1DataList: { xLabel: string[]; yLabel: number[] } = {
    xLabel: [],
    yLabel: [],
  };

  subjects: string[] = ['sub1', 'sub2'];

  //chart 2 data
  years: number[] = [];
  isYearChartShow: boolean = false;

  chart2xAxiadata: string[];
  chart2yAxiadata: number[];

  public gradientFillMain;
  public gradientFillChart1;
  // public gradientFillChart1;
  public ctx;
  public canvas: any;
  public chartColor;

  public mainChartType;
  public mainChartData: Array<any>;
  public mainChartColor: Array<any>;
  public mianChartOption: any;
  public mainChartLabels: Array<any>;

  //bar chart1
  public chart1Type;
  public char1Data: Array<any>;
  public chart1Options: any;
  public chart1Lables: Array<any>;
  public chart1Color: Array<any>;

  //bar chart12
  public chart2Type;
  public chart2Data: Array<any>;
  public chart2Options: any;
  public chart2Lables: Array<any>;
  public chart2Color: Array<any>;

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
    private dashboardService: DashboardService,
    private webSockerService: WebSocketService,
    private alertMessageService: AlertMessageService
  ) {}

  ngOnInit(): void {
    //populate the subject fiels
    this.webSockerService.emit('getSubjects', {
      studentid: this.dashboardService.loginUserData.getUserId,
    });

    this.subjectSubscription = this.webSockerService
      .listen('subectArr')
      .subscribe(
        (data) => {
          this.subjects = data.subjectArray;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );

    //popualte year field
    this.webSockerService.emit('getYear', {
      studentid: this.dashboardService.loginUserData.getUserId,
    });

    this.yearSubscription = this.webSockerService.listen('years').subscribe(
      (data) => {
        this.years = data.years;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );

    //getting data form backend
    this.dashboardService.getMainBoardDetails().subscribe(
      (data) => {
        this.xData = data.xData;
        this.yData = data.yData;
        console.log(this.yData);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.chartColor = '#FFFFFF';
        this.canvas = document.getElementById('bigDashboardChart');
        this.ctx = this.canvas.getContext('2d');

        this.gradientFillMain = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFillMain.addColorStop(1, 'rgba(0,26,77, 0.90)');
        this.gradientFillMain.addColorStop(0, 'rgba(102, 153, 255, 0.6)');

        this.mainChartLabels = this.xData;

        this.mainChartType = 'line';
        this.mainChartData = [
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
                scaleLabel: {
                  display: true,
                  labelString: 'Average Mark Of Term',
                  fontColor: 'white',
                  fontSize: 16,
                },
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
                scaleLabel: {
                  display: true,
                  labelString: 'Year And Term',
                  fontColor: 'white',
                  fontSize: 16,
                },
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

        //start with bar chart1
      }
    );
  }

  onSelectListItem(value) {
    this.dashboardService.getDataForChartData(value).subscribe(
      (data) => {
        this.chart1DataList.xLabel = data.xAxis;
        this.chart1DataList.yLabel = data.yAxis;
        console.log(data);
      },
      (error) => {
        this.alertMessageService.errorAlert(error.error.message);
      },
      () => {
        console.log('complet');
        this.gradientFillChart1 = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFillChart1.addColorStop(1, 'rgba(51, 153, 0, 0.90)');
        this.gradientFillChart1.addColorStop(0, 'rgba(170, 255, 128, 0.9)');

        this.chart1Type = 'bar';

        this.char1Data = [
          {
            label: 'Marks',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: this.chart1DataList.yLabel,
          },
        ];

        this.chart1Options = {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            bodySpacing: 4,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10,
          },
          responsive: 1,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Subject Marks',
                },
                gridLines: {
                  zeroLineColor: 'transparent',
                  display: true,
                  linewidth: 1,
                },
                ticks: {
                  minor: {},
                  beginAtZero: true,
                  mirror: false,
                  suggestedMin: 0,
                  suggestedMax: 100,
                },
              },
            ],
            xAxes: [
              {
                display: true,
                ticks: {
                  minor: {
                    fontSize: '16',
                  },
                  major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000',
                  },
                  display: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Year And Term',
                },

                gridLines: {
                  zeroLineColor: 'transparent',
                  drawTicks: false,
                  display: false,
                  drawBorder: false,
                },
              },
            ],
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 15,
              bottom: 15,
            },
          },
        };

        this.chart1Lables = this.chart1DataList.xLabel;

        this.chart1Color = [
          {
            backgroundColor: this.gradientFillChart1,
            borderColor: '#2CA8FF',
            pointBorderColor: '#FFF',
            pointBackgroundColor: '#2CA8FF',
          },
        ];

        this.isChart1Show = true;
      }
    );
  }

  onSelectListItem2(year, term) {
    this.dashboardService.getChart2Data(year, term).subscribe(
      (data) => {
        this.chart2xAxiadata = data.resultarray.subjectname;
        this.chart2yAxiadata = data.resultarray.marks;
        console.log(this.chart2xAxiadata);
      },
      (error) => {
        this.alertMessageService.errorAlert(error.error.message);
      },
      () => {
        this.gradientFillChart1 = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFillChart1.addColorStop(1, 'rgba(179, 89, 0, 0.90)');
        this.gradientFillChart1.addColorStop(0, 'rgba(255, 166, 77, 0.9)');
        this.chart2Type = 'bar';
        this.chart2Data = [
          {
            label: 'Marks',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: this.chart2yAxiadata,
          },
        ];
        this.chart2Options = {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            bodySpacing: 4,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10,
          },
          responsive: 1,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Each Subject Marks',
                },
                gridLines: {
                  zeroLineColor: 'transparent',
                  display: true,
                  linewidth: 1,
                },
                ticks: {
                  minor: {},
                  beginAtZero: true,
                  mirror: false,
                  suggestedMin: 0,
                  suggestedMax: 100,
                },
              },
            ],
            xAxes: [
              {
                display: true,
                ticks: {
                  minor: {
                    fontSize: '16',
                  },
                  major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000',
                  },
                  display: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'subjects',
                },
                gridLines: {
                  zeroLineColor: 'transparent',
                  drawTicks: false,
                  display: false,
                  drawBorder: false,
                },
              },
            ],
          },
          layout: {
            padding: {
              left: 0,
              right: 10,
              top: 15,
              bottom: 15,
            },
          },
        };
        this.chart2Lables = this.chart2xAxiadata;
        this.chart2Color = [
          {
            backgroundColor: this.gradientFillChart1,
            borderColor: '#2CA8FF',
            pointBorderColor: '#FFF',
            pointBackgroundColor: '#2CA8FF',
          },
        ];
        this.isYearChartShow = true;
      }
    );
  }

  ngOnDestroy() {
    this.subjectSubscription.unsubscribe();
    this.yearSubscription.unsubscribe();
  }
}
