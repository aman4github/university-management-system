package com.major.backend.repository.result;

import com.major.backend.model.result.Result1stSem;
import com.major.backend.model.result.Result3rdSem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Result3rdSemRepository extends JpaRepository<Result3rdSem, Long> {
    public List<Result3rdSem> findByStreamAndSem(String string, String sem);
    Result3rdSem findById(long id);
}
