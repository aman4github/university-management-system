package com.major.backend.model.result;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Result3rdSem {

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
    private String it;
    private String java;
    private String c;
    //    BBA Subjects
    private String macroeconomics;
    private String financialaccounting;
    private String consumerbehaviour;
//    BHM Subjects
    private String leadershipskills;
    private String housekeeping;
    private String tourismmarketing;

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

    public String getIt() {
        return it;
    }

    public void setIt(String it) {
        this.it = it;
    }

    public String getJava() {
        return java;
    }

    public void setJava(String java) {
        this.java = java;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

    public String getMacroeconomics() {
        return macroeconomics;
    }

    public void setMacroeconomics(String macroeconomics) {
        this.macroeconomics = macroeconomics;
    }

    public String getFinancialaccounting() {
        return financialaccounting;
    }

    public void setFinancialaccounting(String financialaccounting) {
        this.financialaccounting = financialaccounting;
    }

    public String getConsumerbehaviour() {
        return consumerbehaviour;
    }

    public void setConsumerbehaviour(String consumerbehaviour) {
        this.consumerbehaviour = consumerbehaviour;
    }

    public String getLeadershipskills() {
        return leadershipskills;
    }

    public void setLeadershipskills(String leadershipskills) {
        this.leadershipskills = leadershipskills;
    }

    public String getHousekeeping() {
        return housekeeping;
    }

    public void setHousekeeping(String housekeeping) {
        this.housekeeping = housekeeping;
    }

    public String getTourismmarketing() {
        return tourismmarketing;
    }

    public void setTourismmarketing(String tourismmarketing) {
        this.tourismmarketing = tourismmarketing;
    }
}
