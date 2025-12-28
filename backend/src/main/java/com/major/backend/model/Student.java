package com.major.backend.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Student {

    @Id
    private Long id;

    public Long getId() {
        return id;
    }

    private String name;
    private String phno;

    @Column(unique = true)
    private String email;
    private String stream;
    private String pass;
    private String status;
    private String sem;
    private Timestamp reg_date;
    private Timestamp passout_date;

    public Timestamp getPassout_date() {
        return passout_date;
    }

    public void setPassout_date(Timestamp passout_date) {
        this.passout_date = passout_date;
    }

    public String getSem() {
        return sem;
    }

    public void setSem(String sem) {
        this.sem = sem;
    }

    public Timestamp getReg_date() {
        return reg_date;
    }

    public void setReg_date(Timestamp reg_date) {
        this.reg_date = reg_date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPhno() {
        return phno;
    }

    public void setPhno(String phno) {
        this.phno = phno;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
