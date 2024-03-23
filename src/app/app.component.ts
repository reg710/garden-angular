import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationSearchComponent } from './views/location-search/location-search.component';
import { DecisionComponent } from './views/decision/decision.component';
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { WeatherReport } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LocationSearchComponent,
    DecisionComponent,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {}

  title = 'garden-angular';
  weatherReport?: WeatherReport;

  processWeather(report: WeatherReport) {
    this.weatherReport = report;
  }
}
