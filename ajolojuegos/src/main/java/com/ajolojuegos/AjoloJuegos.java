package com.ajolojuegos;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@SpringBootApplication
public class AjoloJuegos {

	public static void main(String[] args) {
		SpringApplication.run(AjoloJuegos.class, args);
	}

}
	