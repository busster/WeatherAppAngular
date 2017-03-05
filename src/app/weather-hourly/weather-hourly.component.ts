import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css']
})
export class WeatherHourlyComponent implements OnInit {
  @Input('data') hours: any[];

  constructor() { }

  ngOnInit() {
  }

}
