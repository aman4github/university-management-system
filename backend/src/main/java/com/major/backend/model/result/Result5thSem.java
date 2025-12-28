package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result5thSem {

    @Id
    private Long id;
    private String stream;
    private String sem;

    public String getSem() {
        return sem;
    }

    public void setSem(String sem) {
        this.sem = sem;
    }

    //    BCA Subjects
    private String mern;
    private String mean;
    private String mysql;
//    BBA Subjects
    private String businessmath;
    private String computing;
    private String languagelab;
//    BHM Subjects
    private String softskills;

    public String getSoftskills() {
        return softskills;
    }

    public void setSoftskills(String softskills) {
        this.softskills = softskills;
    }

    private String nutrition;

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }

    private String foodsafety;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public String getMern() {
        return mern;
    }

    public void setMern(String mern) {
        this.mern = mern;
    }

    public String getMean() {
        return mean;
    }

    public void setMean(String mean) {
        this.mean = mean;
    }

    public String getMysql() {
        return mysql;
    }

    public void setMysql(String mysql) {
        this.mysql = mysql;
    }

    public String getBusinessmath() {
        return businessmath;
    }

    public void setBusinessmath(String businessmath) {
        this.businessmath = businessmath;
    }

    public String getComputing() {
        return computing;
    }

    public void setComputing(String computing) {
        this.computing = computing;
    }

    public String getLanguagelab() {
        return languagelab;
    }

    public void setLanguagelab(String languagelab) {
        this.languagelab = languagelab;
    }

    public String getFoodsafety() {
        return foodsafety;
    }

    public void setFoodsafety(String foodsafety) {
        this.foodsafety = foodsafety;
    }
}
