import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationSearchComponent } from './views/location-search/location-search.component';
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LocationSearchComponent,
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
}
