package com.major.backend.repository.result;

import com.major.backend.model.result.Result1stSem;
import com.major.backend.model.result.Result5thSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result5thSemRepository extends JpaRepository<Result5thSem, Long> {
    public List<Result5thSem> findByStreamAndSem(String string, String sem);
    Result5thSem findById(long id);
}
