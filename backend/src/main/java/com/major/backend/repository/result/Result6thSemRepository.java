package com.major.backend.repository.result;

import com.major.backend.model.result.Result1stSem;
import com.major.backend.model.result.Result6thSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result6thSemRepository extends JpaRepository<Result6thSem, Long> {
    public List<Result6thSem> findByStreamAndSem(String string, String sem);
    Result6thSem findById(long id);
}
