package com.mks.Arogya_backend.service;

import com.mks.Arogya_backend.entity.Doctor;
import com.mks.Arogya_backend.repo.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    // Create a new doctor
    public Doctor addDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // Get all doctors
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    // Get doctor by ID
    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepository.findById(id);
    }

    // Update a doctor
    public Doctor updateDoctor(Long id, Doctor updatedDoctor) {
        return doctorRepository.findById(id).map(doctor -> {
            doctor.setName(updatedDoctor.getName());
            doctor.setSpecialization(updatedDoctor.getSpecialization());
            doctor.setImage(updatedDoctor.getImage()); // Assuming you store image URL/path
            return doctorRepository.save(doctor);
        }).orElseGet(() -> {
            updatedDoctor.setId(id);
            return doctorRepository.save(updatedDoctor);
        });
    }

    // Delete a doctor
    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
}
