import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() weather: any;

  days: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChange) {
    if (this.weather !== undefined) {
      this.days = this.weather.future_days
    }
    // changes.prop contains the old and the new value...
  }

}
