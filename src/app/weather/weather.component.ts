import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { WeatherService } from '../weather.service'
import { PositionService } from '../position.service'
import { AddSearchService } from '../add-search.service'


interface ApiWeatherData {
  today: weatherMain,
  hours: any[],
  future_days: any[],
  alerts: any[],
  geo_coordinates: any
}

export interface userData {
    auth_token: string,
    user: {
      name: string,
      id: number,
      email: string,
      searches: any[]
    }
  }

export interface weatherMain {
    now: {
      summary: string,
      temperature: string,
      time: string,
      location: string,
      icon: string,
      apparentTemperature: string,
      cloudCover: string,
      humidity: string,
      windBearing: string,
      windSpeed: string,
      pressure: string,
      dewPoint: string,
      visibility: string
    },
    precipProbability: string,
    precipType: string,
    temperatureMax: string,
    temperatureMin: string,
    temperatureMaxTime: string,
    temperatureMinTime: string,
    ozone: string,
    sunriseTime: string,
    sunsetTime: string
  }


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService, PositionService, AddSearchService]
})
export class WeatherComponent implements OnInit {




  user: userData = null;
  coords: any = {};

  weatherPayload: {
    user: userData,
    coords: {}
  };

  private chartData: Array<any>;

  place = '';
  search: any = {};

  weather: ApiWeatherData = null;

  get hourlyData(): any[] {
    return this.weather ? this.weather.hours : [];
  }
  get forecastData(): any[] {
    return this.weather ? this.weather.future_days : [];
  }
  get todayData(): weatherMain {
    return this.weather ? this.weather.today : null;
  }
  get miscData(): weatherMain {
    return this.weather ? this.weather.today : null;
  }
  get alertData(): any[] {
    return this.weather ? (this.weather.alerts || []) : [];
  }

  get searchData(): any{
    return this.search ? this.search : null;
  }


  // searchCoords: any = {};
  

  constructor(private weatherService: WeatherService,
              private positionService: PositionService,
              private addSearchService: AddSearchService) {

  }

  ngOnInit() {
    // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.errorPosition, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0})
    //  };

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
        this.coords['locationName'] = data.results[2]['address_components'][1]['long_name'] + ", " + data.results[2]['address_components'][3]['short_name'];
        console.log(this.coords)
        this.getWeather();
        this.getHistoric();

      },
      (err) => {

      }
    );
  }

  getWeather() {
    this.weatherPayload = {user: this.user, coords: this.coords};
    this.weatherService.create(this.weatherPayload).subscribe(
      (data) => {
        this.weather = data;
      },
      (err) => {

      }
    );
    this.addSearchService.create(this.weatherPayload).subscribe(
      (data)=> {
        this.search = data;
      },
      (err) => {

      }
    );
  }
  getHistoric() {
    this.weatherPayload = {user: this.user, coords: this.coords};
    this.weatherService.historic(this.weatherPayload).subscribe(
      (data) => {
        this.parseHistoricData(data);
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


  searchWeather() {
    this.positionService.search(this.place).then(
      (data)=> {
        var dataCoords = data.results[0].geometry.location;
        this.coords.lat = dataCoords.lat;
        this.coords.lng = dataCoords.lng;
        this.coords['locationName'] = data.results[0].formatted_address;

        this.getWeather();
        this.getHistoric();
        this.place = '';
        // this.searchCoords = {};
      },
      (err) => {

      }
    );
  }

  doRecentSearch(search) {
    this.place = search;
    this.searchWeather();
  }

  setCurrentUser(user) {
    this.user = user;
  }
  logoutUser() {
    this.user = null;
  }


}
