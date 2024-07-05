package it.massimo.cruddef.controller;

import it.massimo.cruddef.models.Auth;
import it.massimo.cruddef.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public AuthResponse register(@RequestParam String username, @RequestParam String password) {
        Optional<Auth> result = service.register(username, password);
        if (result.isPresent()) {
            Auth auth = result.get();
            return new AuthResponse(auth.getResult(), auth.getReason());
        } else {
            return new AuthResponse("error", "Registration failed");
        }
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestParam String username, @RequestParam String password) {
        Optional<Auth> result = service.authenticate(username, password);
        if (result.isPresent()) {
            Auth auth = result.get();
            return new AuthResponse(auth.getResult(), auth.getReason());
        } else {
            return new AuthResponse("error", "Login failed");
        }
    }

    private static class AuthResponse {
        private final String status;
        private final String message;

        public AuthResponse(String status, String message) {
            this.status = status;
            this.message = message;
        }

        public String getStatus() {
            return status;
        }

        public String getMessage() {
            return message;
        }
    }
}
