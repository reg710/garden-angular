import { Component } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IPlant } from '../../models/plant.model';


const TEMP_PLANTS: IPlant[] = [
  {
    name: 'Beans',
    wateringNeeds: 'high'
  },
  {
    name: 'Asparagus',
    wateringNeeds: 'low'
  }
]
@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {

  displayedColumns: string[] = ['select', 'name', 'wateringNeeds'];
  dataSource = new MatTableDataSource<IPlant>(TEMP_PLANTS);
  selection = new SelectionModel<IPlant>(true, []);

  constructor(private plantService: PlantService) { }

  // Checking the number selected against total number of rows in data source
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Either selects all or unchecks all
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  // TODO track selected ids


  fetchAllPlants() {
    this.plantService.getAllPlants()
      .subscribe((response) => {
        console.log(response);
      })
  }
}
