package com.taxiapp.Taxi.App.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taxiapp.Taxi.App.models.Role;

public interface RoleRepository extends MongoRepository<Role, String>{

}
