import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { weatherMain } from '../weather/weather.component';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  @Input('data') weatherToday: weatherMain;
  @Input('alerts') alerts: any[];


  constructor() { }

  ngOnInit() {
  }
}
