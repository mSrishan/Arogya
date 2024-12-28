package com.mks.Arogya_backend.service.impl;

import com.mks.Arogya_backend.model.Doctor;
import com.mks.Arogya_backend.repo.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl {

    private final DoctorRepository doctorRepository;

    public Doctor addDoctor(String name, String specialization, MultipartFile imageFile) throws IOException {
        Doctor doctor = new Doctor();
        doctor.setName(name);
        doctor.setSpecialization(specialization);
        doctor.setImage(imageFile.getBytes()); // Convert file to byte array

        return doctorRepository.save(doctor);
    }
}
