package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result4thSem {

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
    private String flask;
    private String django;
    private String webdev;
//    BBA Subjects
    private String calculus;
    private String productmanagement;
    private String communication;
//    BHM Subjects
    private String hrmanagement;
    private String publicrelations;
    private String foodscience;

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

    public String getFlask() {
        return flask;
    }

    public void setFlask(String flask) {
        this.flask = flask;
    }

    public String getDjango() {
        return django;
    }

    public void setDjango(String django) {
        this.django = django;
    }

    public String getWebdev() {
        return webdev;
    }

    public void setWebdev(String webdev) {
        this.webdev = webdev;
    }

    public String getCalculus() {
        return calculus;
    }

    public void setCalculus(String calculus) {
        this.calculus = calculus;
    }

    public String getProductmanagement() {
        return productmanagement;
    }

    public void setProductmanagement(String productmanagement) {
        this.productmanagement = productmanagement;
    }

    public String getCommunication() {
        return communication;
    }

    public void setCommunication(String communication) {
        this.communication = communication;
    }

    public String getHrmanagement() {
        return hrmanagement;
    }

    public void setHrmanagement(String hrmanagement) {
        this.hrmanagement = hrmanagement;
    }

    public String getPublicrelations() {
        return publicrelations;
    }

    public void setPublicrelations(String publicrelations) {
        this.publicrelations = publicrelations;
    }

    public String getFoodscience() {
        return foodscience;
    }

    public void setFoodscience(String foodscience) {
        this.foodscience = foodscience;
    }
}
