package com.taxiapp.Taxi.App;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TaxiAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaxiAppApplication.class, args);
	}

}
