package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result2ndSem {

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
    private String dbms;
    private String python;
    private String networking;
//    BBA Subjects
    private String management;
    private String sales;
    private String retailmanagement;
//    BHM Subjects
    private String operations;
    private String hospitalityservices;
    private String customerservice;

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

    public String getDbms() {
        return dbms;
    }

    public void setDbms(String dbms) {
        this.dbms = dbms;
    }

    public String getPython() {
        return python;
    }

    public void setPython(String python) {
        this.python = python;
    }

    public String getNetworking() {
        return networking;
    }

    public void setNetworking(String networking) {
        this.networking = networking;
    }

    public String getManagement() {
        return management;
    }

    public void setManagement(String management) {
        this.management = management;
    }

    public String getSales() {
        return sales;
    }

    public void setSales(String sales) {
        this.sales = sales;
    }

    public String getRetailmanagement() {
        return retailmanagement;
    }

    public void setRetailmanagement(String retailmanagement) {
        this.retailmanagement = retailmanagement;
    }

    public String getOperations() {
        return operations;
    }

    public void setOperations(String operations) {
        this.operations = operations;
    }

    public String getHospitalityservices() {
        return hospitalityservices;
    }

    public void setHospitalityservices(String hospitalityservices) {
        this.hospitalityservices = hospitalityservices;
    }

    public String getCustomerservice() {
        return customerservice;
    }

    public void setCustomerservice(String customerservice) {
        this.customerservice = customerservice;
    }
}
