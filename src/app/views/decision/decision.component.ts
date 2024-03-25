import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IWeatherData, WeatherReport } from '../../models/weather.model';
import { WEATHER } from '../../models/temp-weather';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent implements OnChanges {

  @Input() weatherReport?: WeatherReport = WEATHER;

  showLongAnswer: boolean = false;
  shortAnswer: string = '';
  longAnswer: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherReport'] && changes['weatherReport'].currentValue && this.weatherReport) {
      this.makeWateringDecision(this.weatherReport);
    }
  }

  sumRainfall(data: IWeatherData[]): number {
    return data.reduce((total, day) => day.precipitation + total, 0);
  }

  sayYes() {
    this.shortAnswer = "Yes!";
    this.longAnswer = "Long way of saying yes";
  }

  sayMaybe() {
    this.shortAnswer = "Maybe...";
    this.longAnswer = "Long way of saying maybe";
  }

  sayNo() {
    this.shortAnswer = "No.";
    this.longAnswer = "Long way of saying no";
  }

  makeWateringDecision(report: WeatherReport) {
    this.shortAnswer = '';
    this.longAnswer = '';
    let totalRainfall = this.sumRainfall(report.data);
    console.log(totalRainfall);

    if (totalRainfall >= 1.5) {
      this.sayNo();
    } else if (totalRainfall < 1.5 && totalRainfall >= 1) {
      this.sayMaybe();
    } else {
      this.sayYes();
    }
  }
}
