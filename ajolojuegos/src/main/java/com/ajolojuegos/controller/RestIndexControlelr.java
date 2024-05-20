package com.ajolojuegos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class RestIndexControlelr {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/games")
    public List<Map<String, Object>> getGames() {
        return jdbcTemplate.queryForList("SELECT * FROM game");
    }
}
