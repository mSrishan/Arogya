package com.mks.Arogya_backend.controller;

import com.mks.Arogya_backend.entity.Admin;
import com.mks.Arogya_backend.security.JwtUtil;
import com.mks.Arogya_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminService adminService;  // Service for validating admin credentials

    // Endpoint for admin login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        // Validate admin credentials from the database
        boolean isValidAdmin = adminService.validateAdmin(admin.getUsername(), admin.getPassword());

        if (isValidAdmin) {
            String token = jwtUtil.generateToken(admin.getUsername());
            return ResponseEntity.ok(token);  // Return 200 with the JWT token
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    // Optional: An endpoint to verify the token (e.g., to check if it's valid)
    @GetMapping("/verify")
    public ResponseEntity<String> verifyToken(@RequestParam("token") String token) {
        if (jwtUtil.validateToken(token)) {
            return ResponseEntity.ok("Token is valid");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
        }
    }
}
