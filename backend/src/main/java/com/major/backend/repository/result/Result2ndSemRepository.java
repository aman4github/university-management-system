package com.major.backend.repository.result;

import com.major.backend.model.result.Result1stSem;
import com.major.backend.model.result.Result2ndSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result2ndSemRepository extends JpaRepository<Result2ndSem, Long> {
    public List<Result2ndSem> findByStreamAndSem(String string, String sem);
    Result2ndSem findById(long id);
}
