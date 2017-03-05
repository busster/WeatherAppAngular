import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherComponent } from './weather/weather.component'


@Injectable()
export class PositionService {

  public apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  public apiKey = '&key=AIzaSyCZoccc4EfWOS2RWrYoqcFcS64lU4pnXXU'
  public apiSearch = 'https://maps.googleapis.com/maps/api/geocode/json?address='


  constructor(private http: Http) {
  }

  query(coords) {
    return this.http.get(`${this.apiUrl}${coords.lat},${coords.lng}${this.apiKey}`).map(res => {
      return res.json();
    });
  }

  search(place) {
    return this.http.get(`${this.apiSearch}${place}${this.apiKey}`).map(res => {
      console.log(res)
      return res.json();
    }).toPromise();
  }



}

