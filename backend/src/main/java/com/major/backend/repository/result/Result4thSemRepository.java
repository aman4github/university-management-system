package com.major.backend.repository.result;

import com.major.backend.model.result.Result1stSem;
import com.major.backend.model.result.Result4thSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result4thSemRepository extends JpaRepository<Result4thSem, Long> {
    public List<Result4thSem> findByStreamAndSem(String string, String sem);
    Result4thSem findById(long id);
}
