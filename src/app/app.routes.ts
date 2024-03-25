import { Routes } from '@angular/router';
import { PlantListComponent } from './views/plant-list/plant-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'plants', component: PlantListComponent, title: 'Plant List'}
];
