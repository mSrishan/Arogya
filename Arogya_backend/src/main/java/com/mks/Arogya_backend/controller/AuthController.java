package com.mks.Arogya_backend.controller;

import com.mks.Arogya_backend.entity.Admin;
import com.mks.Arogya_backend.security.JwtUtil;
import com.mks.Arogya_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminService adminService;  // Service for validating admin credentials

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        // Validate admin credentials from the database
        boolean isValidAdmin = adminService.validateAdmin(admin.getUsername(), admin.getPassword());

        if (isValidAdmin) {
            String token = jwtUtil.generateToken(admin.getUsername());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
