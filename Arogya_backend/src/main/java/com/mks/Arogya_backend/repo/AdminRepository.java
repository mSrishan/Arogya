package com.mks.Arogya_backend.repo;


import com.mks.Arogya_backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    // Method to find an Admin by username
    Admin findByUsername(String username);
}

