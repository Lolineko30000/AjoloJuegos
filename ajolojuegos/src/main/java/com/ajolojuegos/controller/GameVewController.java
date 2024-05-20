package com.ajolojuegos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameVewController {
    @GetMapping("/game/{gameId}")
    public String showGameDetails() {
        return "game"; // Devuelve el nombre de la vista de los detalles del juego
    }
}
