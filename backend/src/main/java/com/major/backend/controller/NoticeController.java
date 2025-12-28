package com.major.backend.controller;

import com.major.backend.model.Notice;
import com.major.backend.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NoticeController {
    @Autowired
    private NoticeRepository noticeRepository;

    @PostMapping("/postNotice")
    Notice newNotice(@RequestBody Notice newNotice) {
        return noticeRepository.save(newNotice);
    }

    @GetMapping("/getNoticeByStreamBCA/{stream}")
    List<Notice> getNoticeByStreamBCA(@PathVariable String stream) {
        return noticeRepository.findByStream("BCA");
    }

    @GetMapping("/getNoticeByStreamBBA/{stream}")
    List<Notice> getNoticeByStreamBBA(@PathVariable String stream) {
        return noticeRepository.findByStream("BBA");
    }

    @GetMapping("/getNoticeByStreamBHM/{stream}")
    List<Notice> getNoticeByStreamBHM(@PathVariable String stream) {
        return noticeRepository.findByStream("BHM");
    }

    @DeleteMapping("/deleteNotice/{id}")
    void deleteNotice(@PathVariable Long id){
        noticeRepository.deleteById(id);
    }

}
