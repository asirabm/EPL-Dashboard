package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = {"com.match","com.example.batchprocessing","com.Controller"})
@EntityScan({"com.match","com.match.model"})
@EnableJpaRepositories(basePackages = {"com.match","com.example.batchprocessing"})

public class EplDashboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(EplDashboardApplication.class, args);
	}

}
