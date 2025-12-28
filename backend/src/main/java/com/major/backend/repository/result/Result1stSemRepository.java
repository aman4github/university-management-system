package com.major.backend.repository.result;

import com.major.backend.model.Attendance;
import com.major.backend.model.result.Result1stSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result1stSemRepository extends JpaRepository<Result1stSem, Long> {
    public List<Result1stSem> findByStreamAndSem(String string, String sem);

    Result1stSem findById(long id);
}
