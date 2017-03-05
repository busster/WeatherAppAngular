import {Directive,ElementRef,Input,OnInit,OnChanges} from '@angular/core';
declare var google:any;
declare var googleLoaded:any;
@Directive({
  selector: '[GoogleChart]'
})
export class GoogleChartComponent implements OnInit, OnChanges {
  public _element:any;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
    setTimeout(() =>{
      google.charts.load('current', {'packages':['corechart']});
        setTimeout(() =>{
          this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element)
        },1000);
      },1000
    );
  }
  ngOnChanges() {
    this.redrawGraph(this.chartData);
  }
  drawGraph (chartOptions,chartType,chartData,ele) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable:chartData ,
        options:chartOptions || {},
        containerId: ele.id
      });
      wrapper.draw();
    }
  }
  redrawGraph(data){
    var self = this;
    // window.setInterval(function () {
        self.drawGraph(self.chartOptions,self.chartType,data,self._element);
    // }, 10000);
  }
}