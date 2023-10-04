package com.example.userservice.repository;

import com.example.baseservice.dto.Email;
import com.example.userservice.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends MongoRepository<User, String> {
    @Query("{}")
    List<Email> getAll();
    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);
    Optional<User> findById(String id);
}
