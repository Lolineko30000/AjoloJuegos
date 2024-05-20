package com.ajolojuegos.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Language {
    @Id
    public Integer languageId;
    public String languageName;
}
