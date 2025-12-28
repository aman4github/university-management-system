package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result1stSem {

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
    private String operatingsystem;
    private String dsa;
    private String oops;
//    BBA Subjects
    private String statistics;
    private String maths;
    private String accounts;
//    BHM Subjects
    private String kitchenservices;
    private String foodpreparation;
    private String cateringsciences;

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

    public String getOperatingsystem() {
        return operatingsystem;
    }

    public void setOperatingsystem(String operatingsystem) {
        this.operatingsystem = operatingsystem;
    }

    public String getDsa() {
        return dsa;
    }

    public void setDsa(String dsa) {
        this.dsa = dsa;
    }

    public String getOops() {
        return oops;
    }

    public void setOops(String oops) {
        this.oops = oops;
    }

    public String getStatistics() {
        return statistics;
    }

    public void setStatistics(String statistics) {
        this.statistics = statistics;
    }

    public String getMaths() {
        return maths;
    }

    public void setMaths(String maths) {
        this.maths = maths;
    }

    public String getAccounts() {
        return accounts;
    }

    public void setAccounts(String accounts) {
        this.accounts = accounts;
    }

    public String getKitchenservices() {
        return kitchenservices;
    }

    public void setKitchenservices(String kitchenservices) {
        this.kitchenservices = kitchenservices;
    }

    public String getFoodpreparation() {
        return foodpreparation;
    }

    public void setFoodpreparation(String foodpreparation) {
        this.foodpreparation = foodpreparation;
    }

    public String getCateringsciences() {
        return cateringsciences;
    }

    public void setCateringsciences(String cateringsciences) {
        this.cateringsciences = cateringsciences;
    }


}
