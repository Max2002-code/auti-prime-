import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      (data) => this.cars = data,
      (error) => console.error(error)
    );
  }
}
