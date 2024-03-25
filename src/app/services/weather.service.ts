import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherReport } from '../models/weather.model';
import { Observable, map, of } from 'rxjs';
import { WEATHER } from '../models/temp-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // TODO add catchError here or in subscribe
  getWeather(zip: string): Observable<WeatherReport | null> {
    // to use when testing layout
    // return of(WEATHER);
    
    return this.httpClient.get(`${this.url}/weather/${zip}`)
      .pipe(
        map((result: any) => {
          if (!result) {
            return null
          }
          return new WeatherReport(result)
        })
      )
  }

}
