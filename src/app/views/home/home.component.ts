import { Component } from '@angular/core';
import { LocationSearchComponent } from '../location-search/location-search.component'
import { DecisionComponent } from '../decision/decision.component';
import { MatCardModule } from '@angular/material/card';
import { WeatherReport } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LocationSearchComponent,
    DecisionComponent,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  weatherReport?: WeatherReport;

  constructor(private weatherService: WeatherService) {}

  fetchWeather(zip: string) {
    this.weatherService.getWeather(zip)
    .subscribe((response) => {
      if (response) {
        this.weatherReport = response;
      }
    })
  }
  
}
