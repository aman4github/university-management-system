package com.major.backend.repository;
import com.major.backend.model.Attendance;
import com.major.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    public List<Attendance> findByStream(String string);

    Attendance findById(long id);

    public List<Attendance> findByStreamAndSem(String string, String sem);
}
