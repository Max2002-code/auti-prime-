package it.massimo.cruddef.service;

import it.massimo.cruddef.models.User;
import it.massimo.cruddef.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }

    public Optional<User> findByName(String name) {
        return repository.findByName(name);
    }
}
