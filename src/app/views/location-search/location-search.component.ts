import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './location-search.component.html',
  styleUrl: './location-search.component.scss'
})
export class LocationSearchComponent {

  // TODO add regex validator to limit to 5 digit pattern
  zipFormControl = new FormControl('', [Validators.required])

  constructor(private weatherService: WeatherService) { }

  public fetchWeather() {
    // this.weatherService.getWeather()
    //   .subscribe((response) => {
    //     console.log(response);
    //   })
  }
}
