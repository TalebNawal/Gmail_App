package com.example.userservice.repository;

import com.example.baseservice.dto.Email;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmailRepository extends MongoRepository<Email, String> {

    @Query("{}")
    List<Email> getAll();
    @Query("{'id': ?0}")
    void updateEmailFavoritedStatus(String emailId, boolean favorited);

    List<Email> findByStar(boolean b);
    List<Email> findBySpam(boolean b);
    List<Email> findByTrash(boolean b);
    List<Email> findByArch(boolean b);
    List<Email> findByArchAndSpamAndTrash(boolean arch, boolean spam, boolean trash);
}

