import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { weatherMain } from '../weather/weather.component';



@Component({
  selector: 'app-weather-misc',
  templateUrl: './weather-misc.component.html',
  styleUrls: ['./weather-misc.component.css']
})
export class WeatherMiscComponent implements OnInit {
  @Input('data') weatherMisc: weatherMain;



  constructor() { }

  ngOnInit() {
  }

}
