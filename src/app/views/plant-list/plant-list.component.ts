import { Component } from '@angular/core';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {

  constructor(private plantService: PlantService) {}

  fetchAllPlants() {
    this.plantService.getAllPlants() 
      .subscribe((response) => {
        console.log(response);
      })
  }
}
