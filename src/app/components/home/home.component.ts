import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[] = []; // Array to hold fetched cars

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars(); // Fetch cars on component initialization
  }

  fetchCars(): void {
    this.carService.getAllCars().subscribe(
      (data: Car[]) => {
        this.cars = data; // Assign fetched cars to the component variable
      },
      (error) => {
        console.error('Error fetching cars:', error); // Handle error if any
      }
    );
  }
}
