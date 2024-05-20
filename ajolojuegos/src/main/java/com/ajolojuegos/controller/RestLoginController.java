package com.ajolojuegos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestLoginController {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @PostMapping("/login_")
    public String login(@RequestBody String username, @RequestBody String password) {
        // Lógica para autenticar al usuario en la base de datos
        String sql = "SELECT COUNT(*) FROM users WHERE username = ? AND password = ?";
        int rowCount = jdbcTemplate.queryForObject(sql, Integer.class, username, password);
        if (rowCount > 0) {
            return "{\"message\": \"Login successful\"}";
        } else {
            return "{\"message\": \"Invalid username or password\"}";
        }
    }

    @PostMapping("/register")
    public String register(@RequestBody String username, @RequestBody String password) {
        // Lógica para registrar nuevos usuarios en la base de datos
        String sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, username, password);
        if (rowsAffected > 0) {
            return "{\"message\": \"Registration successful\"}";
        } else {
            return "{\"message\": \"Failed to register user\"}";
        }
    }
}
