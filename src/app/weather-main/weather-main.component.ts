import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  @Input() weather: any;

  weatherMain: any = {
    summary: '',
    temperature: '',
    location: '',
    time: '',
    icon: '',
    precipProbability: '',
    precipType: '',
    apparentTemperature: '',
    temperatureMax: '',
    temperatureMin: '',
    temperatureMaxTime: '',
    temperatureMinTime: '',
    alerts: []
  }

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChange) {
    if (this.weather !== undefined) {
      this.weatherMain.summary = this.weather.today.now.summary
      this.weatherMain.icon = this.weather.today.now.icon
      this.weatherMain.temperature = this.weather.today.now.temperature
      this.weatherMain.location = this.weather.today.now.location
      this.weatherMain.time = this.weather.today.now.time
      this.weatherMain.precipProbability = this.weather.today.precipProbability
      this.weatherMain.precipType = this.weather.today.precipType
      this.weatherMain.apparentTemperature = this.weather.today.now.apparentTemperature
      this.weatherMain.temperatureMax = this.weather.today.temperatureMax
      this.weatherMain.temperatureMaxTime = this.weather.today.temperatureMaxTime
      this.weatherMain.temperatureMin = this.weather.today.temperatureMin
      this.weatherMain.temperatureMinTime = this.weather.today.temperatureMinTime
      if (this.weather.alerts) {
        this.weatherMain.alerts = this.weather.alerts
      }
    }
    // changes.prop contains the old and the new value...
  }

}
