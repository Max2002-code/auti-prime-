import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bestSellingCars = [
    { brand: 'Toyota', modello: 'Corolla', price: '25,000', image: 'assets/images/toyotaCorolla.jpg' },
    { brand: 'Honda', modello: 'Civic', price: '23,500', image: 'assets/images/hondaCivic.jpg' },
    { brand: 'Ford', modello: 'Mustang', price: '40,000', image: 'assets/images/fordMustang.jpg' },
    { brand: 'Chevrolet', modello: 'Camaro', price: '38,500', image: 'assets/images/chevroletCamaro.jpg' },
    // Aggiungi altre auto più vendute secondo necessità
  ];

  constructor() { }
}
