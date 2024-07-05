package it.massimo.cruddef.controller;

import it.massimo.cruddef.models.Car;
import it.massimo.cruddef.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/car")
@CrossOrigin(origins = "http://localhost:4200")
public class CarController {

    @Autowired
    private CarService carService;

    // Endpoint per recuperare tutte le automobili
    @GetMapping("/all")
    public List<Car> getAllCars() {
        return carService.findAll();
    }

    // Endpoint per recuperare un'automobile per ID
    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id) {
        Optional<Car> optionalCar = carService.findById((long) id);
        return optionalCar.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
