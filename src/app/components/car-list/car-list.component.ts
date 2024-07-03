import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/model/car.model';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  sortedCars: Car[] = [];
  brands: string[] = [];
  selectedBrand: string = '';
  selectedModel: string = '';
  currentSortOrder: string = 'asc';
  errorMessage: string = '';
  filteredModels: Car[] = []; // Dichiarazione di filteredModels come array di Car

  constructor(
    private carService: CarService,
    private carrelloService: CarrelloService
  ) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
    this.carService.getAllCars().subscribe(
      (data) => {
        this.cars = data;
        this.brands = [...new Set(data.map(car => car.brand))];
        this.applyFiltersAndSort();
      },
      (error) => {
        this.errorMessage = 'Error fetching cars: ' + error;
        console.error('Error fetching cars:', error);
      }
    );
  }

  onBrandChange() {
    this.selectedModel = ''; // Resetta il modello selezionato quando cambia il brand
    this.applyFiltersAndSort();
  }

  onModelChange() {
    this.applyFiltersAndSort();
  }

  onSortOrderChange() {
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort() {
    let filteredCars = this.cars;

    // Filtra per brand se selezionato
    if (this.selectedBrand) {
      filteredCars = filteredCars.filter(car => car.brand === this.selectedBrand);
    }

    // Filtra per modello se selezionato
    if (this.selectedModel) {
      filteredCars = filteredCars.filter(car => car.model === this.selectedModel);
    }

    // Assegna i risultati filtrati a filteredModels
    this.filteredModels = filteredCars;

    // Applica ordinamento per prezzo
    this.sortedCars = filteredCars.slice().sort((a, b) => {
      return this.currentSortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

  addToCart(car: Car) {
    this.carrelloService.addToCart(car); // Aggiungi l'auto al carrello utilizzando il servizio CarrelloService
  }

  isInCart(car: Car): boolean {
    return this.carrelloService.isCarInCart(car); // Verifica se l'auto è nel carrello utilizzando il servizio CarrelloService
  }
}
