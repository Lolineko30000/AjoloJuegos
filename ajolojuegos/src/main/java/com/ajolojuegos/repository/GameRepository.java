package com.ajolojuegos.repository;

import com.ajolojuegos.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
    // No es necesario definir ningún método aquí
}
