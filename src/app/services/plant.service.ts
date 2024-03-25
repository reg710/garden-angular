import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPlant } from '../models/plant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // TODO play around with using signals instead of Observables

  // TODO add catchError to pipe

  getAllPlants(): Observable<IPlant[]> {
    return this.httpClient.get<IPlant[]>(`${this.url}/plant`);
  }

  getPlant(id: string) {

  }

  newPlant(plant: IPlant) {

  }

  updatePlant(id: string, plant: IPlant) {

  }

  deletePlant(id: string) {

  }
}
