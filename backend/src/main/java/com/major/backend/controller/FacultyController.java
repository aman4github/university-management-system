package com.major.backend.controller;

import com.major.backend.Services.ServiceSender;
import com.major.backend.exception.UserNotFoundException;
import com.major.backend.model.Faculty;
import com.major.backend.model.Student;
import com.major.backend.repository.FacultyRepository;
import com.major.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FacultyController {

    @Autowired
    private FacultyRepository facultyRepository;
    @Autowired
    private ServiceSender send;

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/getAllFaculty")
    List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }

    @GetMapping("/getFaculty")
    List<Faculty> getFaculty() {
        return facultyRepository.findByType("FACULTY");
    }

    @GetMapping("/getFacultyById/{id}")
    Faculty getFacultyById(@PathVariable Long id) {
        return facultyRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PostMapping("/postFaculty")
    Faculty newFaculty(@RequestBody Faculty newFaculty) {
        return facultyRepository.save(newFaculty);
    }

    @PutMapping("/editFacultyPass/{id}")
    Faculty editFacultyPass(@RequestBody Faculty newFaculty, @PathVariable Long id) {
        return facultyRepository.findById(id)
                .map(faculty -> {
                    faculty.setPass(newFaculty.getPass());
                    return facultyRepository.save(faculty);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/editStudentPass/{id}")
    Student editStudentPass(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setPass(newStudent.getPass());
                    return studentRepository.save(student);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateFaculty/{id}")
    Faculty updateFaculty(@RequestBody Faculty newFaculty, @PathVariable Long id) {
        return facultyRepository.findById(id)
                .map(user -> {
                    user.setName(newFaculty.getName());
                    user.setEmail(newFaculty.getEmail());
                    return facultyRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("/getStudentPassChangeByStreamAndStatus/{stream}")
    List<Student> getStudentPassChangeByStream(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatus(stream, "APPROVED");
    }

    @DeleteMapping("/deleteFaculty/{id}")
    void deleteFaculty(@PathVariable Long id){
        facultyRepository.deleteById(id);
    }

    @GetMapping("/sendmailFaculty")
    public ResponseEntity<Object> sendMailFaculty(@RequestParam("mailid") String mailid) {
        System.out.println(mailid);
        Faculty f=new Faculty();
        f=facultyRepository.findByEmail(mailid);
        if(f==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("can not find user");
        }
        send.sendEmail(mailid, "Faculty Approval", "WELCOME "+f.getName()+"\n Here is Your Faculty Id and Password\n"+"Faculty Id :- "+f.getId()+"\nPassword :- "+f.getPass());
        return ResponseEntity.status(HttpStatus.OK).body("Mail sent");
    }

    int x ;
    public int otpGenerator(){
        Random random = new Random();
        int min = 1000;
        int max = 9999;
        x = random.nextInt(max - min + 1) + min;
        return x;
    }

    @PostMapping("/FacultysignIn")
    public ResponseEntity<String> FacultysignIn(@RequestBody Faculty faculty){
        Faculty f=facultyRepository.findByIdAndPass(faculty.getId(),faculty.getPass());
        if(f==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Faculty Does Not Exist");
        }
        int otp=otpGenerator();
        send.sendEmail(f.getEmail(), "Login OTP", "Your Login OTP is "+String.valueOf(otp));
        System.out.println(otp+"in send");
        return ResponseEntity.status(HttpStatus.OK).body("otp sent");
    }

    @GetMapping("/checkOtpFaculty")
    public ResponseEntity<Object> checkOtp(@RequestParam("otp") String otp){
        System.out.println(x+"in check");
        if(String.valueOf(x).equals(otp)){
            return ResponseEntity.status(HttpStatus.OK).body("otp matched");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
    }

    String emailNewPass;

    @GetMapping("/forgetSendMailFaculty")
    public ResponseEntity<Object> forgetSendMailFaculty(@RequestParam("mailid") String mailid) {
        Faculty f=new Faculty();
        f=facultyRepository.findByEmail(mailid);
        if(f==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("can not find user");
        }
        int otp=otpGenerator();
        send.sendEmail(f.getEmail(), "FORGET PASSWORD ?", "OTP is "+String.valueOf(otp));
        emailNewPass=f.getEmail();
        return ResponseEntity.status(HttpStatus.OK).body("Mail sent");
    }

    @GetMapping("/changeNewPassFaculty")
    public ResponseEntity<Object>changeNewPassFaculty(@RequestParam("newPass") String newPass){
        System.out.println(emailNewPass);
        facultyRepository.changeNewPass(newPass,emailNewPass);
        return ResponseEntity.status(HttpStatus.OK).body("Password set");
    }


}
