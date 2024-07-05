package it.massimo.cruddef.controller;

import it.massimo.cruddef.models.User;
import it.massimo.cruddef.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/all")
    public List<User> all() {
        return service.findAll();
    }

    @GetMapping("/name/{param}")
    public Optional<User> findByName(@PathVariable String param) {
        return service.findByName(param);
    }
}
