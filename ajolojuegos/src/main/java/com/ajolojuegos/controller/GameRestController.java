package com.ajolojuegos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class  GameRestController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/game/{gameId}")
    public Map<String, Object> getGame(@PathVariable Long gameId) {
        return jdbcTemplate.queryForMap("SELECT * FROM game WHERE game_id = ?", gameId);
    }

    @GetMapping("/api/game/{gameId}/reviews")
    public List<Map<String, Object>> getReviewsForGame(@PathVariable Long gameId) {
        return jdbcTemplate.queryForList("SELECT * FROM review WHERE game_id = ?", gameId);
    }
}