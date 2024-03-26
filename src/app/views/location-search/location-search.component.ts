import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  @Output() onWeatherSearch = new EventEmitter<string>();

  zipFormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/g)])
  searching: boolean = false;

  public fetchWeather() {
    this.searching = true;
    let zip = this.zipFormControl.value;
    if (zip) {
      this.onWeatherSearch.emit(zip);
    }
  }
}
