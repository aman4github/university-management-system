package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result6thSem {

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
    private String aptitude;

    public String getAptitude() {
        return aptitude;
    }

    public void setAptitude(String aptitude) {
        this.aptitude = aptitude;
    }

    private String multimedia;
    private String designing;
//    BBA Subjects
    private String softwarelab;
    private String businessaccounting;
    private String businesslaw;
//    BHM Subjects
    private String humanresources;
    private String hotellaw;
    private String internationalbaking;

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


    public String getMultimedia() {
        return multimedia;
    }

    public void setMultimedia(String multimedia) {
        this.multimedia = multimedia;
    }

    public String getDesigning() {
        return designing;
    }

    public void setDesigning(String designing) {
        this.designing = designing;
    }

    public String getSoftwarelab() {
        return softwarelab;
    }

    public void setSoftwarelab(String softwarelab) {
        this.softwarelab = softwarelab;
    }

    public String getBusinessaccounting() {
        return businessaccounting;
    }

    public void setBusinessaccounting(String businessaccounting) {
        this.businessaccounting = businessaccounting;
    }

    public String getBusinesslaw() {
        return businesslaw;
    }

    public void setBusinesslaw(String businesslaw) {
        this.businesslaw = businesslaw;
    }

    public String getHumanresources() {
        return humanresources;
    }

    public void setHumanresources(String humanresources) {
        this.humanresources = humanresources;
    }

    public String getHotellaw() {
        return hotellaw;
    }

    public void setHotellaw(String hotellaw) {
        this.hotellaw = hotellaw;
    }

    public String getInternationalbaking() {
        return internationalbaking;
    }

    public void setInternationalbaking(String internationalbaking) {
        this.internationalbaking = internationalbaking;
    }
}
