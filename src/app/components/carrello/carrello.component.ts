import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { CarrelloService } from 'src/app/services/carrello.service';

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
    console.log('Carrello:', this.carrello); // Verifica nel console.log se il carrello viene popolato correttamente
  }

  removeFromCart(car: Car) {
    this.carrelloService.removeFromCart(car);
    this.carrello = this.carrelloService.getCarrello(); // Aggiorna la lista dopo la rimozione
  }
}
