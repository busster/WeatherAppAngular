import {Component, OnInit, OnChanges, Input } from '@angular/core';
import {GoogleChartComponent} from '../google-chart/google-chart.component';

@Component({

  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() private data: Array<any>;

  public line_ChartData: Array<any>;
  public line_ChartOptions  = {
    title: 'Weather Data for the Past Month',
    width: 900,
    height: 500
  };

  constructor() {
  }

  ngOnInit() {
    this.line_ChartData = this.data
  }
  ngOnChanges() {
    this.line_ChartData = this.data
  }

}