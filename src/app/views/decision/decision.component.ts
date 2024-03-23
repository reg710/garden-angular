import { Component, Input } from '@angular/core';
import { WeatherReport } from '../../models/weather.model';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent {
  @Input() weatherReport?: WeatherReport;
}
