import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherComponent } from './weather/weather.component'

@Injectable()
export class AddSearchService {

  public apiUrl = 'https://quiet-wave-59477.herokuapp.com';

  constructor(private http: Http) {
  }

  create(weather_payload:any) {
    return this.http.post(`${this.apiUrl}/search`, {weather_payload: weather_payload}).map(res => {
      return res.json();
    });
  }

}
