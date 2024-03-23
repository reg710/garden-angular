import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent {
  @Input() decisionTest = '';
}
