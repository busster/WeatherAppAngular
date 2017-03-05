import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-misc',
  templateUrl: './weather-misc.component.html',
  styleUrls: ['./weather-misc.component.css']
})
export class WeatherMiscComponent implements OnInit {
  @Input() weather: any;

  weatherMisc: any = {
    cloudCover: '',
    humidity: '',
    windBearing: '',
    windSpeed: '',
    pressure: '',
    dewPoint: '',
    visibility: '',
    ozone: '',
    sunriseTime: '',
    sunsetTime: ''
  }

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChange) {
    if (this.weather !== undefined) {
      this.weatherMisc.cloudCover = this.weather.today.now.cloudCover
      this.weatherMisc.humidity = this.weather.today.now.humidity
      this.weatherMisc.windBearing = this.weather.today.now.windBearing
      this.weatherMisc.windSpeed = this.weather.today.now.windSpeed
      this.weatherMisc.pressure = this.weather.today.now.pressure
      this.weatherMisc.dewPoint = this.weather.today.now.dewPoint
      this.weatherMisc.visibility = this.weather.today.now.visibility
      this.weatherMisc.ozone = this.weather.today.ozone
      this.weatherMisc.sunriseTime = this.weather.today.sunriseTime
      this.weatherMisc.sunsetTime = this.weather.today.sunsetTime
    }
    // changes.prop contains the old and the new value...
  }

}
