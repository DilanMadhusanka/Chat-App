package com.taxiapp.Taxi.App.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taxiapp.Taxi.App.models.User;

public interface UserRepository extends MongoRepository<User, String>{

	Optional<User> findByUsername(String username);

}
