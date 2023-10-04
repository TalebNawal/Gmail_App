package com.example.baseservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Email {



    @Id
    private String id;
    private String from;
    //private MultipartFile[] files;
    private String to;
    private String[] cc;
    private String subject;
    private String body;
    private String  date;
    private boolean star;
    private boolean spam;
    private boolean arch;
    private boolean trash;





}
