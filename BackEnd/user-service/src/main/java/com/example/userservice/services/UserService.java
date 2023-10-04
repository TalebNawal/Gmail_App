package com.example.userservice.services;



import com.example.userservice.repository.UserRepository;

import com.example.userservice.user.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByusername(String username) {
        return userRepository.findByUsername(username);
    }
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean isEmailUnique(String email) {
        Optional<User> existingUser = userRepository.findByEmail(email);
        return !existingUser.isPresent();
    }

    public boolean isUsernameUnique(String username) {
        Optional<User> existingUser = userRepository.findByUsername(username);
        return !existingUser.isPresent();
    }

    public User createUser(User user) {
        if (!isEmailUnique(user.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }

        if (!isUsernameUnique(user.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }

        return userRepository.save(user);
    }


    public User updateUser(String id, User user) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            User updatedUser = existingUser.get();
            updatedUser.setUsername(user.getUsername());
            updatedUser.setPassword(user.getPassword());
            return userRepository.save(updatedUser);
        }
        return null;
    }

    public boolean deleteUser(String id) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}


