package com.example.userservice.contoller;

import com.example.baseservice.dto.Email;
import com.example.baseservice.dto.EmailEvent;
import com.example.userservice.kafka.UserProducer;
import com.example.userservice.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("/mail")
public class EmailController {
    private UserProducer userProducer;
    @Autowired
private EmailService emailService;
    public EmailController(UserProducer userProducer) {
        this.userProducer = userProducer;
    }

    @PostMapping("/send")
    public Email CreateMail(@RequestBody Email email){
        //email.setId(UUID.randomUUID().toString());
        EmailEvent emailEvent=new EmailEvent();
            emailEvent.setEmail(email);


        userProducer.sendMessage(emailEvent);

            return emailService.save(email);
    }

    @GetMapping("/emails")
    public List<Email> getEmails(){
        return emailService.getAll();
    }
    @GetMapping("/ListeEmails")
    public ResponseEntity<List<Email>> getListeEmails() {
        List<Email> favoriteEmails = emailService.getListEmails();
        return ResponseEntity.ok(favoriteEmails);
    }

    @GetMapping("/favorites")
    public ResponseEntity<List<Email>> getFavoriteEmails() {
        List<Email> favoriteEmails = emailService.getFavoriteEmails();
        return ResponseEntity.ok(favoriteEmails);
    }
    @GetMapping("/trash")
    public ResponseEntity<List<Email>> getTrashEmails() {
        List<Email> favoriteEmails = emailService.getTrashEmails();
        return ResponseEntity.ok(favoriteEmails);
    }
    @GetMapping("/spam")
    public ResponseEntity<List<Email>> getspamEmails() {
        List<Email> favoriteEmails = emailService.getSpamEmails();
        return ResponseEntity.ok(favoriteEmails);
    }
    @GetMapping("/Arch")
    public ResponseEntity<List<Email>> getArchEmails() {
        List<Email> favoriteEmails = emailService.getArchEmails();
        return ResponseEntity.ok(favoriteEmails);
    }
    @GetMapping("/email/{id}")
    public Email getEmailById(@PathVariable String id){
        return emailService.getEmailById(id).get();
    }
    @PutMapping("/{emailId}/favorite")
    public ResponseEntity<String> markEmailAsFavorite(@PathVariable String emailId) {
        boolean success = emailService.markEmailAsFavorite(emailId);

        if (success) {
            return ResponseEntity.ok("Email marked as favorite");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to mark email as favorite");
        }
    }
    @PutMapping("/{emailId}/Spam")
    public ResponseEntity<String> markEmailAsSpam(@PathVariable String emailId) {
        boolean success = emailService.markEmailAsSpam(emailId);

        if (success) {
            return ResponseEntity.ok("Email marked as spam");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to mark email as favorite");
        }
    }
    @PutMapping("/{emailId}/Trash")
    public ResponseEntity<String> markEmailAsTrash(@PathVariable String emailId) {
        boolean success = emailService.markEmailAsTrash(emailId);

        if (success) {
            return ResponseEntity.ok("Email marked as trash");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to mark email as favorite");
        }
    }
    @PutMapping("/{emailId}/Arch")
    public ResponseEntity<String> markEmailAsArch(@PathVariable String emailId) {
        boolean success = emailService.markEmailAsArch(emailId);

        if (success) {
            return ResponseEntity.ok("Email marked as archived");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to mark email as favorite");
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEmail(@PathVariable String id) {
        boolean deleted = emailService.deleteEmail(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
