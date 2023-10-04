package com.example.emailservice.service;


import org.springframework.web.multipart.MultipartFile;

public interface EmailService  {
    String sendMail(MultipartFile[] file, String from,String to, String[] cc, String subject, String body);
}