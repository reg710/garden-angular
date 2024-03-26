import { Component, } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IPlant } from '../../models/plant.model';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
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
  newPlantForm: FormGroup;

  constructor(
    private plantService: PlantService,
    private fb: FormBuilder,
  ) {
    this.newPlantForm = this.fb.group({
      name: ['', Validators.required],
      wateringNeeds: ['', Validators.required]
    })
  }

  // ngAfterViewInit(): void {
  //   this.loadPlants();
  // }

  // loadPlants() {
  //   this.plantService.getAllPlants()
  //     .subscribe((response) => {
  //       this.dataSource = new MatTableDataSource(response);
  //     })
  // }

  // Checking the number selected against total number of rows in data source
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  // Either selects all or unchecks all
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    if (this.dataSource) {
      this.selection.select(...this.dataSource.data);
    }
  }

  // TODO track selected ids

  newPlant() {
    let plant = this.newPlantForm.value;
    if (plant) {
      this.plantService.newPlant(plant)
        .subscribe((response) => {
          console.log(response)
        })
    }
  }
}
