package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    public Integer userId;
    public String name;
    public String password;
    public Float walletBalance;
    public String email;
    public String phoneNumber;
}
