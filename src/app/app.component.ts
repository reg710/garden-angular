import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationSearchComponent } from './views/location-search/location-search.component';
import { DecisionComponent } from './views/decision/decision.component';
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';

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
  constructor() {
    console.log(environment.message);
  }

  title = 'garden-angular';
  weatherInfoTest = ''

  processWeather(info: string) {
    console.log(info);
    this.weatherInfoTest = info;
  }
}
