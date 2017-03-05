import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherMiscComponent } from './weather-misc/weather-misc.component';
import { WeatherHourlyComponent } from './weather-hourly/weather-hourly.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { ChartComponent } from './chart/chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherMainComponent,
    WeatherMiscComponent,
    WeatherHourlyComponent,
    WeatherForecastComponent,
    ChartComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
