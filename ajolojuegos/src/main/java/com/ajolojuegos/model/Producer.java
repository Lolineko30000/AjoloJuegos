package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Producer {
    @Id
    public Integer producerId;
    public String name;
}