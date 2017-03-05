import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { WeatherService } from '../weather.service'
import { PositionService } from '../position.service'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService, PositionService]
})
export class WeatherComponent implements OnInit {

  weather: any;
  coords: any = {};
  private chartData: Array<any>;

  // searchCoords: any = {};
  public searchForm = this.fb.group({
    place: [null, Validators.required]
  });

  constructor(private weatherService: WeatherService,
              private positionService: PositionService,
              public fb: FormBuilder) {

  }

  ngOnInit() {
    // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.errorPosition, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0})
    //  };

  }
  ngAfterViewInit() {
  }
  setPosition(position){
      console.log(position)
      this.coords = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.getPosition();
   };
   errorPosition(err) {
     this.coords = {lat: "41.8781", lng: "-87.6298", locationName: "Chicago"};
     this.getWeather();
     this.getHistoric();
   };

 

  getPosition() {
    this.positionService.query(this.coords).subscribe(
      (data) => {
        this.coords['locationName'] = data.results[2]['address_components'][1]['long_name'] + ", " + data.results[2]['address_components'][3]['short_name']
        this.getWeather();
        this.getHistoric();

      },
      (err) => {

      }
    );
  }

  getWeather() {
    this.weatherService.create(this.coords).subscribe(
      (data) => {
        // console.log(data)
        this.weather = data
      },
      (err) => {

      }
    );
  }
  getHistoric() {
    this.weatherService.historic(this.coords).subscribe(
      (data) => {
        this.parseHistoricData(data)
        // this.weather = data
      },
      (err) => {

      }
    );
  }
  parseHistoricData(data) {
    this.chartData = [];
    this.chartData.push(['date', 'Max Temperature', 'Min Temperature'])
    data.forEach((x) => {  
      this.chartData.push([x.date, x.temperatureMax, x.temperatureMin])
    });
  }


  searchWeather(event) {
    this.positionService.search(this.searchForm.value).subscribe(
      (data)=> {
        var dataCoords = data.results[0].geometry.location
        this.coords.lat = dataCoords.lat
        this.coords.lng = dataCoords.lng
        this.coords['locationName'] = data.results[0].formatted_address

        this.getWeather();
        this.getHistoric();
        this.searchForm.reset();
        // this.searchCoords = {};
      },
      (err) => {

      }
    );
  }



}
