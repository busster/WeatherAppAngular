import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherComponent } from './weather/weather.component'


@Injectable()
export class WeatherService {

  public apiUrl = 'https://quiet-wave-59477.herokuapp.com';

  constructor(private http: Http) {
  }

  query() {
    return this.http.get(`${this.apiUrl}/test`).map(res => {
      return res.json();
    });
  }

  create(coord_data:any) {
    return this.http.post(`${this.apiUrl}/weather`, {coord_data: coord_data}).map(res => {
      return res.json();
    });
  }

  historic(coord_data:any) {
    return this.http.post(`${this.apiUrl}/historic`, {coord_data: coord_data}).map(res => {
      return res.json();
    });
  }

}

