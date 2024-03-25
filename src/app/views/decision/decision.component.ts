import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IWeatherData, WeatherReport } from '../../models/weather.model';
import { WEATHER } from '../../models/temp-weather';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [
    CommonModule,
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
  totalRainfall: number = 0;

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
    this.longAnswer = "Over the last week there's been less than an inch of rainfall so those plants are probably thirsty";
  }

  sayMaybe() {
    this.shortAnswer = "Maybe...";
    this.longAnswer = "Between one to two inches is the recommended amount of water in a week. Although it's above that one inche threshold, it may be worth checking the soil just to be sure. Don't want to lose those beans.";
  }

  sayNo() {
    this.shortAnswer = "No.";
    this.longAnswer = "Between one to two inches is the recommended amount of water in a week. You don't want to fall into the trap of over watering.";
  }

  makeWateringDecision(report: WeatherReport) {
    this.shortAnswer = '';
    this.longAnswer = '';
    this.totalRainfall = this.sumRainfall(report.data);
    console.log(this.totalRainfall);

    if (this.totalRainfall >= 1.5) {
      this.sayNo();
    } else if (this.totalRainfall < 1.5 && this.totalRainfall >= 1) {
      this.sayMaybe();
    } else {
      this.sayYes();
    }
  }
}
