// carrello.service.ts

import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private carrello: Car[] = [];

  constructor() {}

  addToCart(car: Car) {
    this.carrello.push(car);
  }

  removeFromCart(car: Car) {
    const index = this.carrello.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.carrello.splice(index, 1);
    }
  }

  getCarrello(): Car[] {
    return this.carrello;
  }

  isCarInCart(car: Car): boolean {
    return this.carrello.some(c => c.id === car.id);
  }
}
