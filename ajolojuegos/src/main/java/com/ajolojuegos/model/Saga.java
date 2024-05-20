package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import java.util.Date;

@Entity
public class Saga {
    @Id
    public Integer sagaId;
    @ManyToOne
    public Producer producer;
    public String name;
    public Date date;
}
