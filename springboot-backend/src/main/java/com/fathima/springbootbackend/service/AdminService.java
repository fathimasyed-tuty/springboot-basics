package com.fathima.springbootbackend.service;

import com.fathima.springbootbackend.dto.AppResponseDto;
import com.fathima.springbootbackend.dto.LoginDto;
import com.fathima.springbootbackend.exception.AdminNotFoundException;
import com.fathima.springbootbackend.exception.ResourceNotFoundException;
import com.fathima.springbootbackend.model.Admin;
import com.fathima.springbootbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;
    public AppResponseDto signUp(Admin admin) {

        adminRepository.save(admin);
        AppResponseDto appResponseDto = new AppResponseDto("Account created...","Success");
        return appResponseDto;
    }
    public AppResponseDto login(LoginDto loginDto) {

        AppResponseDto appResponseDto;
        Admin adminDetails = adminRepository.findByEmailId(loginDto.getEmailId()).orElseThrow(() -> new AdminNotFoundException("Admin not found"));
        if(adminDetails.getPassword().equals(loginDto.getPassword())) {
            appResponseDto = new AppResponseDto("Logged in successfully...","Success");
        } else {
            appResponseDto = new AppResponseDto("Invalid password...","Failure");
        }
        return appResponseDto;
    }
}
