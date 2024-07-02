import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car.service';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  sortedCars: Car[] = [];
  currentSortOrder: 'asc' | 'desc' = 'asc'; // Default sorting order

  constructor(private carService: CarService, private carrelloService: CarrelloService) {}

  ngOnInit() {
    this.fetchCars(); // Load cars initially
  }

  fetchCars() {
    this.carService.getAllCars().subscribe(
      (data) => {
        this.cars = data;
        this.sortCars(this.currentSortOrder); // Sort cars based on currentSortOrder initially
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  sortCars(order: 'asc' | 'desc') {
    this.currentSortOrder = order;

    // Copy array using slice()
    this.sortedCars = this.cars.slice();

    // Sort based on order
    if (order === 'asc') {
      this.sortedCars.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.sortedCars.sort((a, b) => b.price - a.price);
    }
  }

  addToCart(car: Car) {
    this.carrelloService.addToCart(car);
  }

  isInCart(car: Car): boolean {
    return this.carrelloService.isCarInCart(car);
  }
}
