import { Injectable } from '@angular/core';
import { WEATHER } from './temp-weather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(): any[] {
    return WEATHER;
  }

}
