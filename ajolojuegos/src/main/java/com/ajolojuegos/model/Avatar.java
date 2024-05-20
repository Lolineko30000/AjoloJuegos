package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Avatar {
    @Id
    public Integer gameId;
    @ManyToOne
    public User user;
    public String name;
}
