import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css']
})
export class WeatherHourlyComponent implements OnInit {
  @Input() weather: any;

  hours: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChange) {
    if (this.weather !== undefined) {
      this.hours = this.weather.hours
    }
    // changes.prop contains the old and the new value...
  }

}
