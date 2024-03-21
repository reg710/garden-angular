import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER } from './temp-weather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // TODO look up how to move this to environments
  // Or environments equivalent in this newer version of Angular
  private url = 'http://localhost:5200';

  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get(`${this.url}/weather`)
  }

}
