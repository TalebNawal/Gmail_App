package com.example.userservice.services;

import com.example.baseservice.dto.Email;
import com.example.userservice.repository.EmailRepository;
import com.example.userservice.user.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmailService {

    private EmailRepository emailRepository;



    public Email save(Email email){
        return emailRepository.save(email);
    }
    public List<Email> getAll(){
        return emailRepository.getAll();
    }
    public Optional<Email> getEmailById(String id) {
        return emailRepository.findById(id);
    }

    public boolean deleteEmail(String id) {
        Optional<Email> existingEmail = emailRepository.findById(id);
        if (existingEmail.isPresent()) {
            emailRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public boolean markEmailAsFavorite(String emailId) {
        Optional<Email> optionalEmail = emailRepository.findById(emailId);
        if (optionalEmail.isPresent()) {
            Email email = optionalEmail.get();
            email.setStar(true);
            emailRepository.save(email);
            return true;
        }
        return false;
    }
    public boolean markEmailAsSpam(String emailId) {
        Optional<Email> optionalEmail = emailRepository.findById(emailId);
        if (optionalEmail.isPresent()) {
            Email email = optionalEmail.get();
            email.setSpam(true);
            emailRepository.save(email);
            return true;
        }
        return false;
    }
    public boolean markEmailAsTrash(String emailId) {
        Optional<Email> optionalEmail = emailRepository.findById(emailId);
        if (optionalEmail.isPresent()) {
            Email email = optionalEmail.get();
            email.setTrash(true);
            emailRepository.save(email);
            return true;
        }
        return false;
    }
    public boolean markEmailAsArch(String emailId) {
        Optional<Email> optionalEmail = emailRepository.findById(emailId);
        if (optionalEmail.isPresent()) {
            Email email = optionalEmail.get();
            email.setArch(true);
            emailRepository.save(email);
            return true;
        }
        return false;
    }

    public List<Email> getListEmails() {
        return emailRepository.findByArchAndSpamAndTrash(false,false,false);
    }
    public List<Email> getFavoriteEmails() {
        return emailRepository.findByStar(true);
    }
    public List<Email> getTrashEmails() {
        return emailRepository.findByTrash(true);
    }
    public List<Email> getSpamEmails() {
        return emailRepository.findBySpam(true);
    }
    public List<Email> getArchEmails() {
        return emailRepository.findByArch(true);
    }

}
