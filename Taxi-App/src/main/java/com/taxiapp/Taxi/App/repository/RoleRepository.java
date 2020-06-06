package com.taxiapp.Taxi.App.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taxiapp.Taxi.App.models.ERole;
import com.taxiapp.Taxi.App.models.Role;

public interface RoleRepository extends MongoRepository<Role, String>{

	Optional<Role> findByName(ERole name);

}
