package com.mks.Arogya_backend.repo;

import com.mks.Arogya_backend.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository <Doctor, Long> {

}
