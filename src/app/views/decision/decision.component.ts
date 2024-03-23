import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IWeatherData, WeatherReport } from '../../models/weather.model';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent implements OnChanges {

  @Input() weatherReport?: WeatherReport;

  showDecision: boolean = false;
  water?: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherReport'] && changes['weatherReport'].currentValue && this.weatherReport) {
      this.makeWateringDecision(this.weatherReport);
    }
  }

  sumRainfall(data: IWeatherData[]): number {
    return data.reduce((total, day) => day.precipitation + total, 0);
  }

  makeWateringDecision(report: WeatherReport) {
    let totalRainfall = this.sumRainfall(report.data);
    console.log(totalRainfall);
    if (totalRainfall > 2) {
      this.water = false;
    }
    this.water = true;
    this.showDecision = true;
  }
}
