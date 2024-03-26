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
    return this.httpClient.get<IPlant>(`${this.url}/plant/${id}`)
  }

  newPlant(plant: IPlant) {
    return this.httpClient.post(`${this.url}/plant`, plant, { responseType: 'text' })
  }

  updatePlant(id: string, plant: IPlant) {
    return this.httpClient.put(`${this.url}/plant/${id}`, plant, { responseType: 'text' })
  }

  deletePlant(id: string) {
    return this.httpClient.delete(`${this.url}/plant/${id}`, { responseType: 'text' })
  }
}
