package it.massimo.cruddef.service;

import it.massimo.cruddef.models.Auth;
import it.massimo.cruddef.models.User;
import it.massimo.cruddef.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public Optional<Auth> authenticate(String username, String password) {
        Optional<Auth> result = Optional.empty();
        var optionalUser = userRepository.findByName(username);

        if (optionalUser.isPresent()) {
            var user = optionalUser.get();
            if (user.getName().equals(username) && user.getPassword().equals(password)) {
                // Username and password match.
                result = Optional.of(new Auth("ok", "User authenticated", "1234"));
            } else {
                // Username and password do not match.
                result = Optional.of(new Auth("error", "Invalid username or password"));
            }

            if (user.getName().equals(username) && !user.getPassword().equals(password)) {
                // Username is correct but password is not.
                result = Optional.of(new Auth("error", "Invalid password supplied"));
            }
        } else {
            result = Optional.of(new Auth("error", "User not found"));
        }

        return result;
    }

    public Optional<Auth> register(String username, String password) {
        Optional<Auth> result = Optional.empty();

        var optionalUser = userRepository.findByName(username);

        if (optionalUser.isEmpty()) {
            var user = new User(username, password);
            userRepository.save(user);

            result = Optional.of(new Auth("ok", "User created succesfully"));
        } else {
            var user = optionalUser.get();
            if (user.getName().equals(username)) {
                result = Optional.of(new Auth("error", "Username already registered"));
            }
        }

        return result;
    }
}
