package com.ajolojuegos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class LoginViewController {

    @GetMapping("/login")
    public String showLoginForm() {
        
        return "login";
    }

}
