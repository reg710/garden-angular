import { Component } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IPlant } from '../../models/plant.model';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  imports: [
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {

  displayedColumns: string[] = ['select', 'name', 'wateringNeeds'];
  dataSource = new MatTableDataSource<IPlant>(TEMP_PLANTS);
  selection = new SelectionModel<IPlant>(true, []);

  nameFormControl = new FormControl('', [Validators.required, Validators.min(2)]);

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

  newPlant() {
    console.log(this.nameFormControl.value)
  }
}
