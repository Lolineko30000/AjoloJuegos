package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import java.util.Date;

@Entity
public class Match {
    @Id
    public Integer gameId;
    @ManyToOne
    public User user;
    public Date startDate;
    public Date endDate;
    public boolean online;
}