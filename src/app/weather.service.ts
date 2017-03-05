import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherComponent } from './weather/weather.component'


@Injectable()
export class WeatherService {

  public apiUrl = 'https://quiet-wave-59477.herokuapp.com';
  // public apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  query() {
    return this.http.get(`${this.apiUrl}/test`).map(res => {
      return res.json();
    });
  }

  create(weather_payload:any) {
    return this.http.post(`${this.apiUrl}/weather`, {weather_payload: weather_payload}).map(res => {
      return res.json();
    });
  }

  historic(weather_payload:any) {
    return this.http.post(`${this.apiUrl}/historic`, {weather_payload: weather_payload}).map(res => {
      return res.json();
    });
  }

}

