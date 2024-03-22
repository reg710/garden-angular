import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER } from './temp-weather'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get(`${this.url}/weather`)
  }

}
