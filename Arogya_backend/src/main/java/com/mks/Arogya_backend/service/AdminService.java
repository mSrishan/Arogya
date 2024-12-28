package com.mks.Arogya_backend.service;

import com.mks.Arogya_backend.entity.Admin;
import com.mks.Arogya_backend.repo.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

@Service
public class AdminService {

    private static final Logger logger = LoggerFactory.getLogger(AdminService.class);

    @Autowired
    private AdminRepository adminRepository;  // Repository for interacting with the Admin table

    @Autowired
    private PasswordEncoder passwordEncoder;  // Password encoder to validate encrypted passwords

    // Validate admin credentials using username and password
    public boolean validateAdmin(String username, String password) {
        // Find admin by username
        Optional<Admin> optionalAdmin = Optional.ofNullable(adminRepository.findByUsername(username));

        // Check if admin exists and password matches (consider password encoding)
        if (optionalAdmin.isPresent()) {
            Admin admin = optionalAdmin.get();
            boolean isValid = passwordEncoder.matches(password, admin.getPassword());  // Compare raw password with encrypted password

            if (!isValid) {
                logger.warn("Invalid password for admin: {}", username);
            }
            return isValid;  // Return true if password matches
        } else {
            logger.warn("Admin not found: {}", username);
            return false;  // Return false if admin not found
        }
    }
}
