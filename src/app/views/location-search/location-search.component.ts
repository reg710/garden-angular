import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [],
  templateUrl: './location-search.component.html',
  styleUrl: './location-search.component.scss'
})
export class LocationSearchComponent {

  constructor(private weatherService: WeatherService) {}

  public fetchWeather() {
    this.weatherService.getWeather()
      .subscribe((response) => {
        console.log(response);
      })
  }
}
