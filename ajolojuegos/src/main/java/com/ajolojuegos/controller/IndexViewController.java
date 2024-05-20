package com.ajolojuegos.controller;


import org.springframework.web.bind.annotation.GetMapping;

public class IndexViewController {
    @GetMapping("/index")
    public String showIndex() {
        return "index";
    }
}
