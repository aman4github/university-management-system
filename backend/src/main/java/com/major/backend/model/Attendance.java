package com.major.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Attendance {

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

    public String getDbmsattended() {
        return dbmsattended;
    }

    public void setDbmsattended(String dbmsattended) {
        this.dbmsattended = dbmsattended;
    }

    public String getPythonattended() {
        return pythonattended;
    }

    public void setPythonattended(String pythonattended) {
        this.pythonattended = pythonattended;
    }

    public String getNetworkingattended() {
        return networkingattended;
    }

    public void setNetworkingattended(String networkingattended) {
        this.networkingattended = networkingattended;
    }

    public String getManagementattended() {
        return managementattended;
    }

    public void setManagementattended(String managementattended) {
        this.managementattended = managementattended;
    }

    public String getSalesattended() {
        return salesattended;
    }

    public void setSalesattended(String salesattended) {
        this.salesattended = salesattended;
    }

    public String getRetailmanagementattended() {
        return retailmanagementattended;
    }

    public void setRetailmanagementattended(String retailmanagementattended) {
        this.retailmanagementattended = retailmanagementattended;
    }

    public String getOperationsattended() {
        return operationsattended;
    }

    public void setOperationsattended(String operationsattended) {
        this.operationsattended = operationsattended;
    }

    public String getHospitalityservicesattended() {
        return hospitalityservicesattended;
    }

    public void setHospitalityservicesattended(String hospitalityservicesattended) {
        this.hospitalityservicesattended = hospitalityservicesattended;
    }

    public String getCustomerserviceattended() {
        return customerserviceattended;
    }

    public void setCustomerserviceattended(String customerserviceattended) {
        this.customerserviceattended = customerserviceattended;
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

    public String getItattended() {
        return itattended;
    }

    public void setItattended(String itattended) {
        this.itattended = itattended;
    }

    public String getJavaattended() {
        return javaattended;
    }

    public void setJavaattended(String javaattended) {
        this.javaattended = javaattended;
    }

    public String getCattended() {
        return cattended;
    }

    public void setCattended(String cattended) {
        this.cattended = cattended;
    }

    public String getMacroeconomicsattended() {
        return macroeconomicsattended;
    }

    public void setMacroeconomicsattended(String macroeconomicsattended) {
        this.macroeconomicsattended = macroeconomicsattended;
    }

    public String getFinancialaccountingattended() {
        return financialaccountingattended;
    }

    public void setFinancialaccountingattended(String financialaccountingattended) {
        this.financialaccountingattended = financialaccountingattended;
    }

    public String getConsumerbehaviourattended() {
        return consumerbehaviourattended;
    }

    public void setConsumerbehaviourattended(String consumerbehaviourattended) {
        this.consumerbehaviourattended = consumerbehaviourattended;
    }

    public String getLeadershipskillsattended() {
        return leadershipskillsattended;
    }

    public void setLeadershipskillsattended(String leadershipskillsattended) {
        this.leadershipskillsattended = leadershipskillsattended;
    }

    public String getHousekeepingattended() {
        return housekeepingattended;
    }

    public void setHousekeepingattended(String housekeepingattended) {
        this.housekeepingattended = housekeepingattended;
    }

    public String getTourismmarketingattended() {
        return tourismmarketingattended;
    }

    public void setTourismmarketingattended(String tourismmarketingattended) {
        this.tourismmarketingattended = tourismmarketingattended;
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

    public String getFlaskattended() {
        return flaskattended;
    }

    public void setFlaskattended(String flaskattended) {
        this.flaskattended = flaskattended;
    }

    public String getDjangoattended() {
        return djangoattended;
    }

    public void setDjangoattended(String djangoattended) {
        this.djangoattended = djangoattended;
    }

    public String getWebdevattended() {
        return webdevattended;
    }

    public void setWebdevattended(String webdevattended) {
        this.webdevattended = webdevattended;
    }

    public String getCalculusattended() {
        return calculusattended;
    }

    public void setCalculusattended(String calculusattended) {
        this.calculusattended = calculusattended;
    }

    public String getProductmanagementattended() {
        return productmanagementattended;
    }

    public void setProductmanagementattended(String productmanagementattended) {
        this.productmanagementattended = productmanagementattended;
    }

    public String getCommunicationattended() {
        return communicationattended;
    }

    public void setCommunicationattended(String communicationattended) {
        this.communicationattended = communicationattended;
    }

    public String getHrmanagementattended() {
        return hrmanagementattended;
    }

    public void setHrmanagementattended(String hrmanagementattended) {
        this.hrmanagementattended = hrmanagementattended;
    }

    public String getPublicrelationsattended() {
        return publicrelationsattended;
    }

    public void setPublicrelationsattended(String publicrelationsattended) {
        this.publicrelationsattended = publicrelationsattended;
    }

    public String getFoodscienceattended() {
        return foodscienceattended;
    }

    public void setFoodscienceattended(String foodscienceattended) {
        this.foodscienceattended = foodscienceattended;
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

    public String getSoftskills() {
        return softskills;
    }

    public void setSoftskills(String softskills) {
        this.softskills = softskills;
    }

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }

    public String getFoodsafety() {
        return foodsafety;
    }

    public void setFoodsafety(String foodsafety) {
        this.foodsafety = foodsafety;
    }

    public String getMernattended() {
        return mernattended;
    }

    public void setMernattended(String mernattended) {
        this.mernattended = mernattended;
    }

    public String getMeanattended() {
        return meanattended;
    }

    public void setMeanattended(String meanattended) {
        this.meanattended = meanattended;
    }

    public String getMysqlattended() {
        return mysqlattended;
    }

    public void setMysqlattended(String mysqlattended) {
        this.mysqlattended = mysqlattended;
    }

    public String getBusinessmathattended() {
        return businessmathattended;
    }

    public void setBusinessmathattended(String businessmathattended) {
        this.businessmathattended = businessmathattended;
    }

    public String getComputingattended() {
        return computingattended;
    }

    public void setComputingattended(String computingattended) {
        this.computingattended = computingattended;
    }

    public String getLanguagelabattended() {
        return languagelabattended;
    }

    public void setLanguagelabattended(String languagelabattended) {
        this.languagelabattended = languagelabattended;
    }

    public String getSoftskillsattended() {
        return softskillsattended;
    }

    public void setSoftskillsattended(String softskillsattended) {
        this.softskillsattended = softskillsattended;
    }

    public String getNutritionattended() {
        return nutritionattended;
    }

    public void setNutritionattended(String nutritionattended) {
        this.nutritionattended = nutritionattended;
    }

    public String getFoodsafetyattended() {
        return foodsafetyattended;
    }

    public void setFoodsafetyattended(String foodsafetyattended) {
        this.foodsafetyattended = foodsafetyattended;
    }

    public String getAptitude() {
        return aptitude;
    }

    public void setAptitude(String aptitude) {
        this.aptitude = aptitude;
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

    public String getAptitudeattended() {
        return aptitudeattended;
    }

    public void setAptitudeattended(String aptitudeattended) {
        this.aptitudeattended = aptitudeattended;
    }

    public String getMultimediaattended() {
        return multimediaattended;
    }

    public void setMultimediaattended(String multimediaattended) {
        this.multimediaattended = multimediaattended;
    }

    public String getDesigningattended() {
        return designingattended;
    }

    public void setDesigningattended(String designingattended) {
        this.designingattended = designingattended;
    }

    public String getSoftwarelabattended() {
        return softwarelabattended;
    }

    public void setSoftwarelabattended(String softwarelabattended) {
        this.softwarelabattended = softwarelabattended;
    }

    public String getBusinessaccountingattended() {
        return businessaccountingattended;
    }

    public void setBusinessaccountingattended(String businessaccountingattended) {
        this.businessaccountingattended = businessaccountingattended;
    }

    public String getBusinesslawattended() {
        return businesslawattended;
    }

    public void setBusinesslawattended(String businesslawattended) {
        this.businesslawattended = businesslawattended;
    }

    public String getHumanresourcesattended() {
        return humanresourcesattended;
    }

    public void setHumanresourcesattended(String humanresourcesattended) {
        this.humanresourcesattended = humanresourcesattended;
    }

    public String getHotellawattended() {
        return hotellawattended;
    }

    public void setHotellawattended(String hotellawattended) {
        this.hotellawattended = hotellawattended;
    }

    public String getInternationalbakingattended() {
        return internationalbakingattended;
    }

    public void setInternationalbakingattended(String internationalbakingattended) {
        this.internationalbakingattended = internationalbakingattended;
    }

    //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String operatingsystem;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String dsa;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String oops;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String statistics;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String maths;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String accounts;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String kitchenservices;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodpreparation;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String cateringsciences;
//    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String operatingsystemattended;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String dsaattended;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String oopsattended;
    //    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String statisticsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mathsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String accountsattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String kitchenservicesattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodpreparationattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String cateringsciencesattended;

    //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String dbms;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String python;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String networking;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String management;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String sales;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String retailmanagement;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String operations;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hospitalityservices;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String customerservice;

    @Column(columnDefinition = "varchar(10) default '0'")
    private String dbmsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String pythonattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String networkingattended;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String managementattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String salesattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String retailmanagementattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String operationsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hospitalityservicesattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String customerserviceattended;

    //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String it;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String java;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String c;

    //    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String macroeconomics;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String financialaccounting;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String consumerbehaviour;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String leadershipskills;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String housekeeping;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String tourismmarketing;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String itattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String javaattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String cattended;

    //    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String macroeconomicsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String financialaccountingattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String consumerbehaviourattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String leadershipskillsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String housekeepingattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String tourismmarketingattended;


        //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String flask;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String django;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String webdev;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String calculus;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String productmanagement;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String communication;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hrmanagement;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String publicrelations;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodscience;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String flaskattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String djangoattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String webdevattended;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String calculusattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String productmanagementattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String communicationattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hrmanagementattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String publicrelationsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodscienceattended;


        //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mern;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mean;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mysql;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businessmath;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String computing;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String languagelab;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String softskills;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String nutrition;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodsafety;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mernattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String meanattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String mysqlattended;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businessmathattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String computingattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String languagelabattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String softskillsattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String nutritionattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String foodsafetyattended;


    //    BCA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String aptitude;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String multimedia;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String designing;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String softwarelab;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businessaccounting;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businesslaw;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String humanresources;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hotellaw;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String internationalbaking;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String aptitudeattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String multimediaattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String designingattended;
//    BBA Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String softwarelabattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businessaccountingattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String businesslawattended;
//    BHM Subjects
    @Column(columnDefinition = "varchar(10) default '0'")
    private String humanresourcesattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String hotellawattended;
    @Column(columnDefinition = "varchar(10) default '0'")
    private String internationalbakingattended;


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

    public String getOperatingsystemattended() {
        return operatingsystemattended;
    }

    public void setOperatingsystemattended(String operatingsystemattended) {
        this.operatingsystemattended = operatingsystemattended;
    }

    public String getDsaattended() {
        return dsaattended;
    }

    public void setDsaattended(String dsaattended) {
        this.dsaattended = dsaattended;
    }

    public String getOopsattended() {
        return oopsattended;
    }

    public void setOopsattended(String oopsattended) {
        this.oopsattended = oopsattended;
    }

    public String getStatisticsattended() {
        return statisticsattended;
    }

    public void setStatisticsattended(String statisticsattended) {
        this.statisticsattended = statisticsattended;
    }

    public String getMathsattended() {
        return mathsattended;
    }

    public void setMathsattended(String mathsattended) {
        this.mathsattended = mathsattended;
    }

    public String getAccountsattended() {
        return accountsattended;
    }

    public void setAccountsattended(String accountsattended) {
        this.accountsattended = accountsattended;
    }

    public String getKitchenservicesattended() {
        return kitchenservicesattended;
    }

    public void setKitchenservicesattended(String kitchenservicesattended) {
        this.kitchenservicesattended = kitchenservicesattended;
    }

    public String getFoodpreparationattended() {
        return foodpreparationattended;
    }

    public void setFoodpreparationattended(String foodpreparationattended) {
        this.foodpreparationattended = foodpreparationattended;
    }

    public String getCateringsciencesattended() {
        return cateringsciencesattended;
    }

    public void setCateringsciencesattended(String cateringsciencesattended) {
        this.cateringsciencesattended = cateringsciencesattended;
    }
}
