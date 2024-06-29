import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent {
  car!: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {
    this.route.params.subscribe(params => {
      const model = params['model'];
      this.carService.getCarByModel(model).subscribe(
        (data) => {
          this.car = data;
        },
        (error) => {
          console.error('Error fetching car:', error);
        }
      );
    });
  }
}
