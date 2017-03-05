import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input('data') days: any[];


  constructor() { }

  ngOnInit() {
  }

}
