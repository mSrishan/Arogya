package com.mks.Arogya_backend.controller;

import com.mks.Arogya_backend.model.Doctor;
import com.mks.Arogya_backend.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/doctors")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;

    @PostMapping
    public ResponseEntity<Doctor> addDoctor(
            @RequestParam String name,
            @RequestParam String specialization,
            @RequestParam("image") MultipartFile image) {
        try {
            Doctor doctor = doctorService.addDoctor(name, specialization, image);
            return ResponseEntity.ok(doctor);
        } catch (Exception e) {
            return ResponseEntity.status(500).build(); // Return 500 if there's an error
        }
    }
}
