package com.major.backend.controller;

import com.major.backend.exception.UserNotFoundException;
import com.major.backend.model.Attendance;
import com.major.backend.model.Faculty;
import com.major.backend.model.Student;
import com.major.backend.model.result.*;
import com.major.backend.repository.StudentRepository;
import com.major.backend.repository.result.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ResultController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private Result1stSemRepository result1stSemRepository;

    @Autowired
    private Result2ndSemRepository result2ndSemRepository;

    @Autowired
    private Result3rdSemRepository result3rdSemRepository;

    @Autowired
    private Result4thSemRepository result4thSemRepository;

    @Autowired
    private Result5thSemRepository result5thSemRepository;

    @Autowired
    private Result6thSemRepository result6thSemRepository;

    @PostMapping("/addStudentResult1stSem")
    Result1stSem newResult1stSem(@RequestBody Result1stSem newResult1stSem) {
        return result1stSemRepository.save(newResult1stSem);
    }

    @PostMapping("/addStudentResult2ndSem")
    Result2ndSem newResult2ndSem(@RequestBody Result2ndSem newResult2ndSem) {
        return result2ndSemRepository.save(newResult2ndSem);
    }

    @PostMapping("/addStudentResult3rdSem")
    Result3rdSem newResult3rdSem(@RequestBody Result3rdSem newResult3rdSem) {
        return result3rdSemRepository.save(newResult3rdSem);
    }

    @PostMapping("/addStudentResult4thSem")
    Result4thSem newResult4thSem(@RequestBody Result4thSem newResult4thSem) {
        return result4thSemRepository.save(newResult4thSem);
    }

    @PostMapping("/addStudentResult5thSem")
    Result5thSem newResult5thSem(@RequestBody Result5thSem newResult5thSem) {
        return result5thSemRepository.save(newResult5thSem);
    }

    @PostMapping("/addStudentResult6thSem")
    Result6thSem newResult6thSem(@RequestBody Result6thSem newResult6thSem) {
        return result6thSemRepository.save(newResult6thSem);
    }

    @GetMapping("/getResultByStream1st/{stream}")
    List<Result1stSem> getResultByStream1st(@PathVariable String stream) {
        return result1stSemRepository.findByStreamAndSem(stream, "1ST");
    }

    @GetMapping("/getResultByStream2nd/{stream}")
    List<Result2ndSem> getResultByStream2nd(@PathVariable String stream) {
        return result2ndSemRepository.findByStreamAndSem(stream, "2ND");
    }

    @GetMapping("/getResultByStream3rd/{stream}")
    List<Result3rdSem> getResultByStream3rd(@PathVariable String stream) {
        return result3rdSemRepository.findByStreamAndSem(stream, "3RD");
    }

    @GetMapping("/getResultByStream4th/{stream}")
    List<Result4thSem> getResultByStream4th(@PathVariable String stream) {
        return result4thSemRepository.findByStreamAndSem(stream, "4TH");
    }

    @GetMapping("/getResultByStream5th/{stream}")
    List<Result5thSem> getResultByStream5th(@PathVariable String stream) {
        return result5thSemRepository.findByStreamAndSem(stream, "5TH");
    }

    @GetMapping("/getResultByStream6th/{stream}")
    List<Result6thSem> getResultByStream6th(@PathVariable String stream) {
        return result6thSemRepository.findByStreamAndSem(stream, "6TH");
    }


//    1ST SEM
//    BCA 1ST SEM
    @PutMapping("/submitMarksBcaDsa1st/{id}")
    Result1stSem submitMarksBcaDsa1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setDsa(newResult1stSem.getDsa());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcaOs1st/{id}")
    Result1stSem submitMarksBcaOs1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setOperatingsystem(newResult1stSem.getOperatingsystem());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcaOops1st/{id}")
    Result1stSem submitMarksBcaOops1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setOops(newResult1stSem.getOops());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 1ST SEM
    @PutMapping("/submitMarksBbaStatistics1st/{id}")
    Result1stSem submitMarksBbaStatistics1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setStatistics(newResult1stSem.getStatistics());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaMaths1st/{id}")
    Result1stSem submitMarksBbaMaths1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setMaths(newResult1stSem.getMaths());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaAccounts1st/{id}")
    Result1stSem submitMarksBbaAccounts1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setAccounts(newResult1stSem.getAccounts());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 1ST SEM
    @PutMapping("/submitMarksBhmKitchenservices1st/{id}")
    Result1stSem submitMarksBhmKitchenservices1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setKitchenservices(newResult1stSem.getKitchenservices());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmFoodpreparation1st/{id}")
    Result1stSem submitMarksBhmFoodpreparation1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setFoodpreparation(newResult1stSem.getFoodpreparation());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmCateringsciences1st/{id}")
    Result1stSem submitMarksBhmCateringsciences1st(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setCateringsciences(newResult1stSem.getCateringsciences());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    2ND SEM
//    BCA 2ND SEM
    @PutMapping("/submitMarksBcaDbms2nd/{id}")
    Result2ndSem submitMarksBcaDbms2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setDbms(newResult2ndSem.getDbms());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcaPython2nd/{id}")
    Result2ndSem submitMarksBcaPython2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setPython(newResult2ndSem.getPython());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcaNetworking2nd/{id}")
    Result2ndSem submitMarksBcaNetworking2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setNetworking(newResult2ndSem.getNetworking());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 2ND SEM
    @PutMapping("/submitMarksBbaManagement2nd/{id}")
    Result2ndSem submitMarksBbaManagement2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setManagement(newResult2ndSem.getManagement());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaSales2nd/{id}")
    Result2ndSem submitMarksBbaSales2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setSales(newResult2ndSem.getSales());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaRetailmanagement2nd/{id}")
    Result2ndSem submitMarksBbaRetailmanagement2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setRetailmanagement(newResult2ndSem.getRetailmanagement());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 2ND SEM
    @PutMapping("/submitMarksBhmOperations2nd/{id}")
    Result2ndSem submitMarksBhmOperations2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setOperations(newResult2ndSem.getOperations());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmhospitalityservices2nd/{id}")
    Result2ndSem submitMarksBhmhospitalityservices2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setHospitalityservices(newResult2ndSem.getHospitalityservices());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmcustomerservice2nd/{id}")
    Result2ndSem submitMarksBhmcustomerservice2nd(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setCustomerservice(newResult2ndSem.getCustomerservice());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

        //    3RD SEM
//    BCA 3RD SEM
    @PutMapping("/submitMarksBcait3rd/{id}")
    Result3rdSem submitMarksBcait3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setIt(newResult3rdSem.getIt());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcajava3rd/{id}")
    Result3rdSem submitMarksBcajava3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setJava(newResult3rdSem.getJava());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcac3rd/{id}")
    Result3rdSem submitMarksBcac3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setC(newResult3rdSem.getC());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 3RD SEM
    @PutMapping("/submitMarksBbamacroeconomics3rd/{id}")
    Result3rdSem submitMarksBbamacroeconomics3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setMacroeconomics(newResult3rdSem.getMacroeconomics());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbafinancialaccounting3rd/{id}")
    Result3rdSem submitMarksBbafinancialaccounting3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setFinancialaccounting(newResult3rdSem.getFinancialaccounting());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaconsumerbehaviour3rd/{id}")
    Result3rdSem submitMarksBbaconsumerbehaviour3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setConsumerbehaviour(newResult3rdSem.getConsumerbehaviour());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 3RD SEM
    @PutMapping("/submitMarksBhmleadershipskills3rd/{id}")
    Result3rdSem submitMarksBhmleadershipskills3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setLeadershipskills(newResult3rdSem.getLeadershipskills());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmhousekeeping3rd/{id}")
    Result3rdSem submitMarksBhmhousekeeping3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setHousekeeping(newResult3rdSem.getHousekeeping());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmtourismmarketing3rd/{id}")
    Result3rdSem submitMarksBhmtourismmarketing3rd(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setTourismmarketing(newResult3rdSem.getTourismmarketing());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    4TH SEM
//    BCA 4TH SEM
    @PutMapping("/submitMarksBcaflask4th/{id}")
    Result4thSem submitMarksBcaflask4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setFlask(newResult4thSem.getFlask());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcadjango4th/{id}")
    Result4thSem submitMarksBcadjango4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setDjango(newResult4thSem.getDjango());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcawebdev4th/{id}")
    Result4thSem submitMarksBcawebdev4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setWebdev(newResult4thSem.getWebdev());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 4TH SEM
    @PutMapping("/submitMarksBbacalculus4th/{id}")
    Result4thSem submitMarksBbacalculus4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setCalculus(newResult4thSem.getCalculus());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbaproductmanagement4th/{id}")
    Result4thSem submitMarksBbaproductmanagement4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setProductmanagement(newResult4thSem.getProductmanagement());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbacommunication4th/{id}")
    Result4thSem submitMarksBbacommunication4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setCommunication(newResult4thSem.getCommunication());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 4TH SEM
    @PutMapping("/submitMarksBhmhrmanagement4th/{id}")
    Result4thSem submitMarksBhmhrmanagement4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setHrmanagement(newResult4thSem.getHrmanagement());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmpublicrelations4th/{id}")
    Result4thSem submitMarksBhmpublicrelations4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setPublicrelations(newResult4thSem.getPublicrelations());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmfoodscience4th/{id}")
    Result4thSem submitMarksBhmfoodscience4th(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setFoodscience(newResult4thSem.getFoodscience());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

        //    5TH SEM
//    BCA 5TH SEM
    @PutMapping("/submitMarksBcamern5th/{id}")
    Result5thSem submitMarksBcamern5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setMern(newResult5thSem.getMern());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcamean5th/{id}")
    Result5thSem submitMarksBcamean5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setMean(newResult5thSem.getMean());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcamysql5th/{id}")
    Result5thSem submitMarksBcamysql5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setMysql(newResult5thSem.getMysql());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 5TH SEM
    @PutMapping("/submitMarksBbabusinessmath5th/{id}")
    Result5thSem submitMarksBbabusinessmath5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setBusinessmath(newResult5thSem.getBusinessmath());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbacomputing5th/{id}")
    Result5thSem submitMarksBbacomputing5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setComputing(newResult5thSem.getComputing());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbalanguagelab5th/{id}")
    Result5thSem submitMarksBbalanguagelab5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setLanguagelab(newResult5thSem.getLanguagelab());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 5TH SEM
    @PutMapping("/submitMarksBhmsoftskills5th/{id}")
    Result5thSem submitMarksBhmsoftskills5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setSoftskills(newResult5thSem.getSoftskills());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmnutrition5th/{id}")
    Result5thSem submitMarksBhmnutrition5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setNutrition(newResult5thSem.getNutrition());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmfoodsafety5th/{id}")
    Result5thSem submitMarksBhmfoodsafety5th(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setFoodsafety(newResult5thSem.getFoodsafety());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

        //    6TH SEM
//    BCA 6TH SEM
    @PutMapping("/submitMarksBcaaptitude6th/{id}")
    Result6thSem submitMarksBcaaptitude6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setAptitude(newResult6thSem.getAptitude());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcamultimedia6th/{id}")
    Result6thSem submitMarksBcamultimedia6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setMultimedia(newResult6thSem.getMultimedia());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBcadesigning6th/{id}")
    Result6thSem submitMarksBcadesigning6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setDesigning(newResult6thSem.getDesigning());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BBA 6TH SEM
    @PutMapping("/submitMarksBbasoftwarelab6th/{id}")
    Result6thSem submitMarksBbasoftwarelab6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setSoftwarelab(newResult6thSem.getSoftwarelab());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbabusinessaccounting6th/{id}")
    Result6thSem submitMarksBbabusinessaccounting6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setBusinessaccounting(newResult6thSem.getBusinessaccounting());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBbabusinesslaw6th/{id}")
    Result6thSem submitMarksBbabusinesslaw6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setBusinesslaw(newResult6thSem.getBusinesslaw());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //    BHM 6TH SEM
    @PutMapping("/submitMarksBhmhumanresources6th/{id}")
    Result6thSem submitMarksBhmhumanresources6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setHumanresources(newResult6thSem.getHumanresources());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhmhotellaw6th/{id}")
    Result6thSem submitMarksBhmhotellaw6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setHotellaw(newResult6thSem.getHotellaw());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/submitMarksBhminternationalbaking6th/{id}")
    Result6thSem submitMarksBhminternationalbaking6th(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setInternationalbaking(newResult6thSem.getInternationalbaking());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //SEM UPDATE
    @PutMapping("/updateStudentExisting1stSem/{id}")
    Result1stSem updateResult1stSem(@RequestBody Result1stSem newResult1stSem, @PathVariable Long id) {
        return result1stSemRepository.findById(id)
                .map(result1stSem -> {
                    result1stSem.setSem(newResult1stSem.getSem());
                    return result1stSemRepository.save(result1stSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentExisting2ndSem/{id}")
    Result2ndSem updateResult2ndSem(@RequestBody Result2ndSem newResult2ndSem, @PathVariable Long id) {
        return result2ndSemRepository.findById(id)
                .map(result2ndSem -> {
                    result2ndSem.setSem(newResult2ndSem.getSem());
                    return result2ndSemRepository.save(result2ndSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentExisting3rdSem/{id}")
    Result3rdSem updateResult3rdSem(@RequestBody Result3rdSem newResult3rdSem, @PathVariable Long id) {
        return result3rdSemRepository.findById(id)
                .map(result3rdSem -> {
                    result3rdSem.setSem(newResult3rdSem.getSem());
                    return result3rdSemRepository.save(result3rdSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentExisting4thSem/{id}")
    Result4thSem updateResult4thSem(@RequestBody Result4thSem newResult4thSem, @PathVariable Long id) {
        return result4thSemRepository.findById(id)
                .map(result4thSem -> {
                    result4thSem.setSem(newResult4thSem.getSem());
                    return result4thSemRepository.save(result4thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentExisting5thSem/{id}")
    Result5thSem updateResult5thSem(@RequestBody Result5thSem newResult5thSem, @PathVariable Long id) {
        return result5thSemRepository.findById(id)
                .map(result5thSem -> {
                    result5thSem.setSem(newResult5thSem.getSem());
                    return result5thSemRepository.save(result5thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentExisting6thSem/{id}")
    Result6thSem updateResult6thSem(@RequestBody Result6thSem newResult6thSem, @PathVariable Long id) {
        return result6thSemRepository.findById(id)
                .map(result6thSem -> {
                    result6thSem.setSem(newResult6thSem.getSem());
                    return result6thSemRepository.save(result6thSem);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @GetMapping("/viewResult1st")
    public ResponseEntity<Object> viewResult1st(@RequestParam("id") long id){

        Result1stSem a = new Result1stSem();
        a = result1stSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewResult2nd")
    public ResponseEntity<Object> viewResult2nd(@RequestParam("id") long id){

        Result2ndSem a = new Result2ndSem();
        a = result2ndSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewResult3rd")
    public ResponseEntity<Object> viewResult3rd(@RequestParam("id") long id){

        Result3rdSem a = new Result3rdSem();
        a = result3rdSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewResult4th")
    public ResponseEntity<Object> viewResult4th(@RequestParam("id") long id){

        Result4thSem a = new Result4thSem();
        a = result4thSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewResult5th")
    public ResponseEntity<Object> viewResult5th(@RequestParam("id") long id){

        Result5thSem a = new Result5thSem();
        a = result5thSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping("/viewResult6th")
    public ResponseEntity<Object> viewResult6th(@RequestParam("id") long id){

        Result6thSem a = new Result6thSem();
        a = result6thSemRepository.findById(id);
        if(a==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

}
