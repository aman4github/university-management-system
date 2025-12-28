package com.major.backend.repository;

import com.major.backend.model.Faculty;
import com.major.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
    Faculty findByEmail(String mailid);

    public List<Faculty> findByType(String type);

    Faculty findByIdAndPass(Long id, String pass);

    @Modifying
    @Transactional
    @Query("UPDATE Faculty f SET f.pass = :newPass WHERE f.email = :email")
    void changeNewPass(@Param("newPass") String newPass, @Param("email") String email);
}
