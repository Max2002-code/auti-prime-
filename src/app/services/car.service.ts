import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:8080/api/test'; // Cambia l'URL se necessario

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
}

export interface Car {
  id: number;
  modello: string;
  brand: string;
  price: number;
}
