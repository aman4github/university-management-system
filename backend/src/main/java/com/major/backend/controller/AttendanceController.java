package com.major.backend.controller;

import com.major.backend.exception.UserNotFoundException;
import com.major.backend.model.Attendance;
import com.major.backend.model.Student;
import com.major.backend.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @PostMapping("/postAttendance")
    Attendance newAttandance(@RequestBody Attendance newAttandance) {
        return attendanceRepository.save(newAttandance);
    }

    @GetMapping("/getAttendanceByStream1st/{stream}")
    List<Attendance> getAttendanceByStream1st(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "1ST");
    }

    @GetMapping("/getAttendanceByStream2nd/{stream}")
    List<Attendance> getAttendanceByStream2nd(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "2ND");
    }

    @GetMapping("/getAttendanceByStream3rd/{stream}")
    List<Attendance> getAttendanceByStream3rd(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "3RD");
    }

    @GetMapping("/getAttendanceByStream4th/{stream}")
    List<Attendance> getAttendanceByStream4th(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "4TH");
    }

    @GetMapping("/getAttendanceByStream5th/{stream}")
    List<Attendance> getAttendanceByStream5th(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "5TH");
    }

    @GetMapping("/getAttendanceByStream6th/{stream}")
    List<Attendance> getAttendanceByStream6th(@PathVariable String stream) {
        return attendanceRepository.findByStreamAndSem(stream, "6TH");
    }

    @GetMapping("/getTotalAttendanceByStream")
    List<Attendance> getTotalAttendanceByStream() {
        return attendanceRepository.findByStream("FACULTY");
    }

    @GetMapping("/getAttendanceById/{id}")
    Attendance getAttendanceById(@PathVariable Long id) {
        return attendanceRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

//    1ST SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcaDsa/{id}")
    Attendance newAttandanceBcaDsa(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDsa(newAttendance.getDsa());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcaOs/{id}")
    Attendance newAttandanceBcaOperatingSystem(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOperatingsystem(newAttendance.getOperatingsystem());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcaOops/{id}")
    Attendance newAttandanceBcaOops(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOops(newAttendance.getOops());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbastatistics/{id}")
    Attendance newAttandanceBbastatistics(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setStatistics(newAttendance.getStatistics());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbamaths/{id}")
    Attendance newAttandanceBbamaths(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMaths(newAttendance.getMaths());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaaccounts/{id}")
    Attendance newAttandanceBbaaccounts(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setAccounts(newAttendance.getAccounts());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmkitchenservices/{id}")
    Attendance newAttandanceBhmkitchenservices(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setKitchenservices(newAttendance.getKitchenservices());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodpreparation/{id}")
    Attendance newAttandanceBhmfoodpreparation(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodpreparation(newAttendance.getFoodpreparation());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmcateringsciences/{id}")
    Attendance newAttandanceBhmcateringsciences(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCateringsciences(newAttendance.getCateringsciences());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    2ND SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcadbms/{id}")
    Attendance newAttandanceBcadbms(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDbms(newAttendance.getDbms());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcapython/{id}")
    Attendance newAttandanceBcapython(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setPython(newAttendance.getPython());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcanetworking/{id}")
    Attendance newAttandanceBcanetworking(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setNetworking(newAttendance.getNetworking());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbamanagement/{id}")
    Attendance newAttandanceBbamanagement(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setManagement(newAttendance.getManagement());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbasales/{id}")
    Attendance newAttandanceBbasales(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSales(newAttendance.getSales());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaretailmanagement/{id}")
    Attendance newAttandanceBbaretailmanagement(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setRetailmanagement(newAttendance.getRetailmanagement());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmoperations/{id}")
    Attendance newAttandanceBhmoperations(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOperations(newAttendance.getOperations());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhospitalityservices/{id}")
    Attendance newAttandanceBhmhospitalityservices(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHospitalityservices(newAttendance.getHospitalityservices());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmcustomerservice/{id}")
    Attendance newAttandanceBhmcustomerservice(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCustomerservice(newAttendance.getCustomerservice());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    3RD SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcait/{id}")
    Attendance newAttandanceBcait(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setIt(newAttendance.getIt());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcajava/{id}")
    Attendance newAttandanceBcajava(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setJava(newAttendance.getJava());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcac/{id}")
    Attendance newAttandanceBcac(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setC(newAttendance.getC());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbamacroeconomics/{id}")
    Attendance newAttandanceBbamacroeconomics(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMacroeconomics(newAttendance.getMacroeconomics());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbafinancialaccounting/{id}")
    Attendance newAttandanceBbafinancialaccounting(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFinancialaccounting(newAttendance.getFinancialaccounting());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaconsumerbehaviour/{id}")
    Attendance newAttandanceBbaconsumerbehaviour(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setConsumerbehaviour(newAttendance.getConsumerbehaviour());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmleadershipskills/{id}")
    Attendance newAttandanceBhmleadershipskills(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setLeadershipskills(newAttendance.getLeadershipskills());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhousekeeping/{id}")
    Attendance newAttandanceBhmhousekeeping(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHousekeeping(newAttendance.getHousekeeping());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmtourismmarketing/{id}")
    Attendance newAttandanceBhmtourismmarketing(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setTourismmarketing(newAttendance.getTourismmarketing());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    4TH SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcaflask/{id}")
    Attendance newAttandanceBcaflask(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFlask(newAttendance.getFlask());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcadjango/{id}")
    Attendance newAttandanceBcadjango(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDjango(newAttendance.getDjango());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcawebdev/{id}")
    Attendance newAttandanceBcawebdev(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setWebdev(newAttendance.getWebdev());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbacalculus/{id}")
    Attendance newAttandanceBbacalculus(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCalculus(newAttendance.getCalculus());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaproductmanagement/{id}")
    Attendance newAttandanceBbaproductmanagement(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setProductmanagement(newAttendance.getProductmanagement());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbacommunication/{id}")
    Attendance newAttandanceBbacommunication(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCommunication(newAttendance.getCommunication());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmhrmanagement/{id}")
    Attendance newAttandanceBhmhrmanagement(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHrmanagement(newAttendance.getHrmanagement());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmpublicrelations/{id}")
    Attendance newAttandanceBhmpublicrelations(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setPublicrelations(newAttendance.getPublicrelations());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodscience/{id}")
    Attendance newAttandanceBhmfoodscience(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodscience(newAttendance.getFoodscience());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    5TH SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcamern/{id}")
    Attendance newAttandanceBcamern(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMern(newAttendance.getMern());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcamean/{id}")
    Attendance newAttandanceBcamean(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMean(newAttendance.getMean());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcamysql/{id}")
    Attendance newAttandanceBcamysql(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMysql(newAttendance.getMysql());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbabusinessmath/{id}")
    Attendance newAttandanceBbabusinessmath(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinessmath(newAttendance.getBusinessmath());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbacomputing/{id}")
    Attendance newAttandanceBbacomputing(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setComputing(newAttendance.getComputing());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbalanguagelab/{id}")
    Attendance newAttandanceBbalanguagelab(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setLanguagelab(newAttendance.getLanguagelab());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmsoftskills/{id}")
    Attendance newAttandanceBhmsoftskills(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSoftskills(newAttendance.getSoftskills());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmnutrition/{id}")
    Attendance newAttandanceBhmnutrition(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setNutrition(newAttendance.getNutrition());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodsafety/{id}")
    Attendance newAttandanceBhmfoodsafety(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodsafety(newAttendance.getFoodsafety());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    6TH SEM
//    BCA Subjects Attendance
    @PutMapping("/putAttendanceBcaaptitude/{id}")
    Attendance newAttandanceBcaaptitude(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setAptitude(newAttendance.getAptitude());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcamultimedia/{id}")
    Attendance newAttandanceBcamultimedia(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMultimedia(newAttendance.getMultimedia());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcadesigning/{id}")
    Attendance newAttandanceBcadesigning(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDesigning(newAttendance.getDesigning());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA Subjects Attendance
    @PutMapping("/putAttendanceBbasoftwarelab/{id}")
    Attendance newAttandanceBbasoftwarelab(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSoftwarelab(newAttendance.getSoftwarelab());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbabusinessaccounting/{id}")
    Attendance newAttandanceBbabusinessaccounting(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinessaccounting(newAttendance.getBusinessaccounting());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbabusinesslaw/{id}")
    Attendance newAttandanceBbabusinesslaw(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinesslaw(newAttendance.getBusinesslaw());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM Subjects Attendance
    @PutMapping("/putAttendanceBhmhumanresources/{id}")
    Attendance newAttandanceBhmhumanresources(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHumanresources(newAttendance.getHumanresources());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhotellaw/{id}")
    Attendance newAttandanceBhmhotellaw(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHotellaw(newAttendance.getHotellaw());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhminternationalbaking/{id}")
    Attendance newAttandanceBhminternationalbaking(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setInternationalbaking(newAttendance.getInternationalbaking());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

//BCA TOTAL
//    1ST SEM
    @PutMapping("/putAttendanceBcaOperatingsystemattended/{id}")
    Attendance totalAttandanceBcaOperatingsystemattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOperatingsystemattended(newAttendance.getOperatingsystemattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcaDsaattended/{id}")
    Attendance totalAttandanceBcaDsaattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDsaattended(newAttendance.getDsaattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcaOopsattended/{id}")
    Attendance totalAttandanceBcaOopsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOopsattended(newAttendance.getOopsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    2ND SEM
    @PutMapping("/putAttendanceBcaDbmsattended/{id}")
    Attendance totalAttandanceBcaDbmsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDbmsattended(newAttendance.getDbmsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcapythonattended/{id}")
    Attendance totalAttandanceBcapythonattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setPythonattended(newAttendance.getPythonattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcanetworkingattended/{id}")
    Attendance totalAttandanceBcanetworkingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setNetworkingattended(newAttendance.getNetworkingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    3RD SEM
    @PutMapping("/putAttendanceBcaitattended/{id}")
    Attendance totalAttandanceBcaitattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setItattended(newAttendance.getItattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcajavaattended/{id}")
    Attendance totalAttandanceBcajavaattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setJavaattended(newAttendance.getJavaattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcacattended/{id}")
    Attendance totalAttandanceBcacattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCattended(newAttendance.getCattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    4TH SEM
    @PutMapping("/putAttendanceBcaflaskattended/{id}")
    Attendance totalAttandanceBcaflaskattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFlaskattended(newAttendance.getFlaskattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcadjangoattended/{id}")
    Attendance totalAttandanceBcadjangoattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDjangoattended(newAttendance.getDjangoattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcawebdevattended/{id}")
    Attendance totalAttandanceBcawebdevattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setWebdevattended(newAttendance.getWebdevattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    5TH SEM
    @PutMapping("/putAttendanceBcamernattended/{id}")
    Attendance totalAttandanceBcamernattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMernattended(newAttendance.getMernattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcameanattended/{id}")
    Attendance totalAttandanceBcameanattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMeanattended(newAttendance.getMeanattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcamysqlattended/{id}")
    Attendance totalAttandanceBcamysqlattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMysqlattended(newAttendance.getMysqlattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    6TH SEM
    @PutMapping("/putAttendanceBcaaptitudeattended/{id}")
    Attendance totalAttandanceBcaaptitudeattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setAptitudeattended(newAttendance.getAptitudeattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcamultimediaattended/{id}")
    Attendance totalAttandanceBcamultimediaattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMultimediaattended(newAttendance.getMultimediaattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBcadesigningattended/{id}")
    Attendance totalAttandanceBcadesigningattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setDesigningattended(newAttendance.getDesigningattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //BBA TOTAL
//    1ST SEM
    @PutMapping("/putAttendanceBbastatisticsattended/{id}")
    Attendance totalAttandanceBbastatisticsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setStatisticsattended(newAttendance.getStatisticsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbamathsattended/{id}")
    Attendance totalAttandanceBbamathsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMathsattended(newAttendance.getMathsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaaccountsattended/{id}")
    Attendance totalAttandanceBbaaccountsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setAccountsattended(newAttendance.getAccountsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    2ND SEM
    @PutMapping("/putAttendanceBbamanagementattended/{id}")
    Attendance totalAttandanceBbamanagementattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setManagementattended(newAttendance.getManagementattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbasalesattended/{id}")
    Attendance totalAttandanceBbasalesattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSalesattended(newAttendance.getSalesattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaretailmanagementattended/{id}")
    Attendance totalAttandanceBbaretailmanagementattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setRetailmanagementattended(newAttendance.getRetailmanagementattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    3RD SEM
    @PutMapping("/putAttendanceBbamacroeconomicsattended/{id}")
    Attendance totalAttandanceBbamacroeconomicsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setMacroeconomicsattended(newAttendance.getMacroeconomicsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbafinancialaccountingattended/{id}")
    Attendance totalAttandanceBbafinancialaccountingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFinancialaccountingattended(newAttendance.getFinancialaccountingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaconsumerbehaviourattended/{id}")
    Attendance totalAttandanceBbaconsumerbehaviourattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setConsumerbehaviourattended(newAttendance.getConsumerbehaviourattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    4TH SEM
    @PutMapping("/putAttendanceBbacalculusattended/{id}")
    Attendance totalAttandanceBbacalculusattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCalculusattended(newAttendance.getCalculusattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbaproductmanagementattended/{id}")
    Attendance totalAttandanceBbaproductmanagementattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setProductmanagementattended(newAttendance.getProductmanagementattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbacommunicationattended/{id}")
    Attendance totalAttandanceBbacommunicationattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCommunicationattended(newAttendance.getCommunicationattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    5TH SEM
    @PutMapping("/putAttendanceBbabusinessmathattended/{id}")
    Attendance totalAttandanceBbabusinessmathattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinessmathattended(newAttendance.getBusinessmathattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbacomputingattended/{id}")
    Attendance totalAttandanceBbacomputingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setComputingattended(newAttendance.getComputingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbalanguagelabattended/{id}")
    Attendance totalAttandanceBbalanguagelabattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setLanguagelabattended(newAttendance.getLanguagelabattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    6TH SEM
    @PutMapping("/putAttendanceBbasoftwarelabattended/{id}")
    Attendance totalAttandanceBbasoftwarelabattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSoftwarelabattended(newAttendance.getSoftwarelabattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbabusinessaccountingattended/{id}")
    Attendance totalAttandanceBbabusinessaccountingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinessaccountingattended(newAttendance.getBusinessaccountingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBbabusinesslawattended/{id}")
    Attendance totalAttandanceBbabusinesslawattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setBusinesslawattended(newAttendance.getBusinesslawattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //BHM TOTAL
//    1ST SEM
    @PutMapping("/putAttendanceBhmkitchenservicesattended/{id}")
    Attendance totalAttandanceBhmkitchenservicesattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setKitchenservicesattended(newAttendance.getKitchenservicesattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodpreparationattended/{id}")
    Attendance totalAttandanceBhmfoodpreparationattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodpreparationattended(newAttendance.getFoodpreparationattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmcateringsciencesattended/{id}")
    Attendance totalAttandanceBhmcateringsciencesattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCateringsciencesattended(newAttendance.getCateringsciencesattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    2ND SEM
    @PutMapping("/putAttendanceBhmoperationsattended/{id}")
    Attendance totalAttandanceBhmoperationsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setOperationsattended(newAttendance.getOperationsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhospitalityservicesattended/{id}")
    Attendance totalAttandanceBhmhospitalityservicesattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHospitalityservicesattended(newAttendance.getHospitalityservicesattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmcustomerserviceattended/{id}")
    Attendance totalAttandanceBhmcustomerserviceattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setCustomerserviceattended(newAttendance.getCustomerserviceattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    3RD SEM
    @PutMapping("/putAttendanceBhmleadershipskillsattended/{id}")
    Attendance totalAttandanceBhmleadershipskillsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setLeadershipskillsattended(newAttendance.getLeadershipskillsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhousekeepingattended/{id}")
    Attendance totalAttandanceBhmhousekeepingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHousekeepingattended(newAttendance.getHousekeepingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmtourismmarketingattended/{id}")
    Attendance totalAttandanceBhmtourismmarketingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setTourismmarketingattended(newAttendance.getTourismmarketingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    4TH SEM
    @PutMapping("/putAttendanceBhmhrmanagementattended/{id}")
    Attendance totalAttandanceBhmhrmanagementattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHrmanagementattended(newAttendance.getHrmanagementattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmpublicrelationsattended/{id}")
    Attendance totalAttandanceBhmpublicrelationsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setPublicrelationsattended(newAttendance.getPublicrelationsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodscienceattended/{id}")
    Attendance totalAttandanceBhmfoodscienceattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodscienceattended(newAttendance.getFoodscienceattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    5TH SEM
    @PutMapping("/putAttendanceBhmsoftskillsattended/{id}")
    Attendance totalAttandanceBhmsoftskillsattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSoftskillsattended(newAttendance.getSoftskillsattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmnutritionattended/{id}")
    Attendance totalAttandanceBhmnutritionattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setNutritionattended(newAttendance.getNutritionattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmfoodsafetyattended/{id}")
    Attendance totalAttandanceBhmfoodsafetyattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setFoodsafetyattended(newAttendance.getFoodsafetyattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    6TH SEM
    @PutMapping("/putAttendanceBhmhumanresourcesattended/{id}")
    Attendance totalAttandanceBhmhumanresourcesattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHumanresourcesattended(newAttendance.getHumanresourcesattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhmhotellawattended/{id}")
    Attendance totalAttandanceBhmhotellawattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setHotellawattended(newAttendance.getHotellawattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/putAttendanceBhminternationalbakingattended/{id}")
    Attendance totalAttandanceBhminternationalbakingattended(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setInternationalbakingattended(newAttendance.getInternationalbakingattended());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentSemAttendance/{id}")
    Attendance updateStudentSemAttendance(@RequestBody Attendance newAttendance, @PathVariable Long id) {
        return attendanceRepository.findById(id)
                .map(attendance -> {
                    attendance.setSem(newAttendance.getSem());
                    return attendanceRepository.save(attendance);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @GetMapping("/viewAttendanceDetails")
    public ResponseEntity<Object> viewAttendanceDetails(@RequestParam("id") long id){

        Attendance a = new Attendance();
        a = attendanceRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewAttendanceDetailsFaculty")
    public ResponseEntity<Object> viewAttendanceDetailsFaculty(@RequestParam("id") long id){

        Attendance a = new Attendance();
        a = attendanceRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

}
