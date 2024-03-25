import { Routes } from '@angular/router';
import { PlantListComponent } from './views/plant-list/plant-list.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'plants', component: PlantListComponent },
    { path: '**', component: HomeComponent }, // could replace with 404 page
];
