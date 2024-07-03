// carrello.component.ts

import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/services/carrello.service';
import { Car } from 'src/app/model/car.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  carrello: Car[] = [];

  constructor(private carrelloService: CarrelloService) {}

  ngOnInit(): void {
    this.carrello = this.carrelloService.getCarrello();
  }

  removeFromCart(car: Car) {
    this.carrelloService.removeFromCart(car);
    this.carrello = this.carrelloService.getCarrello(); // Aggiorna il carrello dopo la rimozione
  }
}
