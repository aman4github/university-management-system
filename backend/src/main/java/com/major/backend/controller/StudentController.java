package com.major.backend.controller;

import com.major.backend.Services.ServiceSender;
import com.major.backend.exception.UserNotFoundException;
import com.major.backend.model.Faculty;
import com.major.backend.model.Student;
import com.major.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ServiceSender send;

    @PostMapping("/postStudent")
    Student newStudent(@RequestBody Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @GetMapping("/getStudent")
    List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("/getStudentByStream/{stream}")
    List<Student> getStudentByStream(@PathVariable String stream) {
        return studentRepository.findByStream(stream);
    }

    @GetMapping("/getStudentByStreamNotApproved/{stream}")
    List<Student> getStudentByStreamNotApproved(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusNot(stream, "APPROVED");
    }

    @GetMapping("/getStudentByStreamPassout/{stream}")
    List<Student> getStudentByStreamPassout(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "PASSOUT");
    }

    @GetMapping("/getStudentByStreamApproved1stSem/{stream}")
    List<Student> getStudentByStreamApproved1stSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "1ST");
    }

    @GetMapping("/getStudentByStreamApproved2ndSem/{stream}")
    List<Student> getStudentByStreamApproved2ndSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "2ND");
    }

    @GetMapping("/getStudentByStreamApproved3rdSem/{stream}")
    List<Student> getStudentByStreamApproved3rdSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "3RD");
    }

    @GetMapping("/getStudentByStreamApproved4thSem/{stream}")
    List<Student> getStudentByStreamApproved4thSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "4TH");
    }

    @GetMapping("/getStudentByStreamApproved5thSem/{stream}")
    List<Student> getStudentByStreamApproved5thSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "5TH");
    }

    @GetMapping("/getStudentByStreamApproved6thSem/{stream}")
    List<Student> getStudentByStreamApproved6thSem(@PathVariable String stream) {
        return studentRepository.findByStreamAndStatusAndSem(stream, "APPROVED", "6TH");
    }

    @GetMapping("/getStudentById/{id}")
    Student getStudentById(@PathVariable Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentStatus/{id}")
    Student updateStudentStatus(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setStatus(newStudent.getStatus());
                    return studentRepository.save(student);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudent/{id}")
    Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(user -> {
                    user.setName(newStudent.getName());
                    user.setEmail(newStudent.getEmail());
                    user.setPhno(newStudent.getPhno());
                    return studentRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentSem/{id}")
    Student updateStudentSem(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setSem(newStudent.getSem());
                    return studentRepository.save(student);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/updateStudentPassoutDate/{id}")
    Student updateStudentPassoutDate(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setPassout_date(newStudent.getPassout_date());
                    return studentRepository.save(student);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @GetMapping("/getStudentByStatusOrStatus/{status1}/{status2}")
    List<Student> getStudentByStatusOrStatus(@PathVariable String stream, String status1, String status2) {
        return studentRepository.findByStreamAndStatusOrStatus(stream, status1, status2);
    }

    @GetMapping("/getStudentByPassoutBCA")
    List<Student> getStudentByPassoutBCA() {
        return studentRepository.findByStreamAndSem("BCA", "PASSOUT");
    }

    @GetMapping("/getStudentByPassoutBBA")
    List<Student> getStudentByPassoutBBA() {
        return studentRepository.findByStreamAndSem("BBA", "PASSOUT");
    }

    @GetMapping("/getStudentByPassoutBHM")
    List<Student> getStudentByPassoutBHM() {
        return studentRepository.findByStreamAndSem("BHM", "PASSOUT");
    }

    @GetMapping("/getStudentByStreamAndStatusBCA")
    List<Student> getStudentByStreamAndStatusBCA() {
        return studentRepository.findByStreamAndStatus("BCA", "APPROVED");
    }

    @GetMapping("/getStudentByStreamAndStatusBBA")
    List<Student> getStudentByStreamAndStatusBBA() {
        return studentRepository.findByStreamAndStatus("BBA", "APPROVED");
    }

    @GetMapping("/getStudentByStreamAndStatusBHM")
    List<Student> getStudentByStreamAndStatusBHM() {
        return studentRepository.findByStreamAndStatus("BHM", "APPROVED");
    }

    @DeleteMapping("/deleteStudent/{id}")
    void deleteStudent(@PathVariable Long id){
        studentRepository.deleteById(id);
    }

//    new

    @GetMapping("/sendmail")
    public ResponseEntity<Object> sendMail(@RequestParam("mailid") String mailid) {
        Student s=new Student();
        s=studentRepository.findByEmail(mailid);
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("can not find user");
        }
        send.sendEmail(mailid, "Student Application Approval", "WELCOME "+s.getName()+"\n\n Here is Your User Id and Password\n"+"User Id:- "+s.getId()+"\nPassword is:- "+s.getPass());
        return ResponseEntity.status(HttpStatus.OK).body("Mail sent");
    }

    @GetMapping("/sendmailForReject")
    public ResponseEntity<Object> sendMailForReject(@RequestParam("mailid") String mailid) {
        Student s=new Student();
        s=studentRepository.findByEmail(mailid);
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("can not find user");
        }
        send.sendEmail(mailid, "Student Application Rejection", "Hey "+s.getName()+", Your Registration has rejected by admin \nTry again later");
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

    String emailNewPass;

    @GetMapping("/forgetSendMail")
    public ResponseEntity<Object> forgetSendMail(@RequestParam("mailid") String mailid) {
        Student s=new Student();
        s=studentRepository.findByEmailAndStatus(mailid, "approved");
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("can not find user");
        }
        int otp=otpGenerator();
        send.sendEmail(s.getEmail(), "FORGET PASSWORD ?", "Your OTP is "+ String.valueOf(otp));
        emailNewPass=s.getEmail();
        return ResponseEntity.status(HttpStatus.OK).body("Mail sent");
    }



    @PostMapping("/signIn")
    public ResponseEntity<String> signIn(@RequestBody Student student){
        Student s=studentRepository.findByIdAndPassAndStatus(student.getId(),student.getPass(), "APPROVED");
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
//        return ResponseEntity.status(HttpStatus.OK).body(s);
        int otp=otpGenerator();
        send.sendEmail(s.getEmail(), "Login OTP", "Your Login OTP is "+ String.valueOf(otp));
        System.out.println(otp+"in send");
        return ResponseEntity.status(HttpStatus.OK).body("otp sent");
    }

    @GetMapping("/checkOtp")
    public ResponseEntity<Object> checkOtp(@RequestParam("otp") String otp){
        System.out.println(x+"in check");
        if(String.valueOf(x).equals(otp)){
            return ResponseEntity.status(HttpStatus.OK).body("otp matched");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
    }

    @GetMapping("/sendSem")
    public ResponseEntity<Object> sendSem(@RequestParam("id") long id){
//        System.out.println(x+"in check");
        Student s = new Student();
        s = studentRepository.findById(id);
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        System.out.println(s.getSem());
        return ResponseEntity.status(HttpStatus.OK).body(s);
    }

    @GetMapping("/changeNewPass")
    public ResponseEntity<Object> changeNewPass(@RequestParam("newPass") String newPass){
        System.out.println(emailNewPass);
        studentRepository.changeNewPass(newPass,emailNewPass);
        return ResponseEntity.status(HttpStatus.OK).body("Password set");
    }

    @GetMapping("/viewStudentDetails")
    public ResponseEntity<Object> viewStudentDetails(@RequestParam("id") long id){

        Student s = new Student();
        s = studentRepository.findById(id);
        if(s==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Does Not Exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body(s);
    }

    @GetMapping("/studentChangeNewPass")
    public ResponseEntity<Object> studentChangeNewPass(@RequestParam("id") long id, @RequestParam("newPass") String newPass) {
        System.out.println("ID: " + id + " New Password: " + newPass);
        studentRepository.changeNewPassStudent(newPass, id);
        return ResponseEntity.status(HttpStatus.OK).body("Password set");
    }

}
