import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { userData } from '../weather/weather.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  @Input() newSearch: any;
  @Output() onRecentSearchSelected = new EventEmitter();
  @Output() onAuthenticateUser = new EventEmitter();
  @Output() onLogoutUser = new EventEmitter();


  name: string = '';
  searches: any[] = [];
  currentSearch: string = '';

  authFormData = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirm: '',
  }

  createNewAccount: boolean = false;

  constructor(private http:Http) { }



  ngOnInit() {
  }
  ngOnChanges() {
    this.searches.push(this.newSearch);
   }

  login() {
    if (this.createNewAccount) {
      return this.http.post(`https://quiet-wave-59477.herokuapp.com/register`, this.authFormData).map(res => {
        let response = res.json();
        return response
        // return res.json();
      }).toPromise().then((result: any) => {
        if(result) {
          this.name = result.user.name;
          this.setUser(result);
        }
      });
    } else {
      return this.http.post(`https://quiet-wave-59477.herokuapp.com/auth_user`, {email: this.authFormData.email, password: this.authFormData.password}).map(res => {
        let response = res.json();
        return response
        // return res.json();
      }).toPromise().then((result) => {
        if(result) {
          this.name = result.user.name;
          this.searches = result.user.searches;
          this.setUser(result);
        }
      });
    }
  }

  doSearch() {
    this.onRecentSearchSelected.emit(this.currentSearch);
  }
  register() {
    this.createNewAccount = true;
  }
  cancel() {
    this.createNewAccount = false;
  }
  setUser(user) {
    this.onAuthenticateUser.emit(user)
  }
  logout() {
    this.authFormData = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirm: '',
    }
    this.createNewAccount = false;
    this.name = '';
    this.onLogoutUser.emit();
  }

}
