package com.taxiapp.Taxi.App.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taxiapp.Taxi.App.models.User;

public interface UserRepository extends MongoRepository<User, String>{

}
