package com.mks.Arogya_backend.service;


import com.mks.Arogya_backend.entity.Admin;
import com.mks.Arogya_backend.repo.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean validateAdmin(String username, String password) {
        Admin admin = adminRepository.findByUsername(username);
        return admin != null && admin.getPassword().equals(password);
    }
}

