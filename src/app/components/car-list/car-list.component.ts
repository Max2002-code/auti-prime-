import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent implements OnInit {
  cars: any[] = []; // Array per contenere le auto

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCandy(); // Chiamata per recuperare i dati delle auto
  }

  getCandy() {
    // Esempio di chiamata HTTP per recuperare i dati delle auto da un'API
    this.http.get<any[]>('http://localhost:4567/api/test').subscribe(
      data => {
        // Assegna i dati ricevuti alla variabile cars
        this.cars = data;
      },
      error => {
        console.error('Errore durante il recupero dei dati delle auto:', error);
      }
    );
  }
}
