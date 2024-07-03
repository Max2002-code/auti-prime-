import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8080/car';

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/all`);
  }

  getCarByModel(model: string): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/model/${model}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/add`, car);
  }
}
