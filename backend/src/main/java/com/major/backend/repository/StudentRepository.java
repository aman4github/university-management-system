package com.major.backend.repository;

import com.major.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    public List<Student> findByStream(String string);

    public List<Student> findByStreamAndStatusAndSem(String stream, String status, String sem);

    public List<Student> findByStreamAndSem(String stream, String sem);

    public List<Student> findByStreamAndStatusNot(String stream, String status);

    public List<Student> findByStreamAndStatusOrStatus(String stream, String status1, String status2);

    public List<Student> findByStreamAndStatus(String stream, String status);

    Student findByEmail(String mailid);

    Student findByEmailAndStatus(String mailid, String status);

    Student findByIdAndPassAndStatus(Long id, String pass, String status);

    Student findById(long id);

    @Modifying
    @Transactional
    @Query("UPDATE Student s SET s.pass = :newPass WHERE s.email = :email")
    void changeNewPass(@Param("newPass") String newPass, @Param("email") String email);

    @Modifying
    @Transactional
    @Query("UPDATE Student s SET s.pass = :newPass WHERE s.id = :id")
    void changeNewPassStudent(@Param("newPass") String newPass, @Param("id") long id);
}
