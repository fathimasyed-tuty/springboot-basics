package com.fathima.springbootbackend.controller;

import com.fathima.springbootbackend.dto.AppResponseDto;
import com.fathima.springbootbackend.dto.LoginDto;
import com.fathima.springbootbackend.model.Admin;
import com.fathima.springbootbackend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<Object> signUp(@RequestBody Admin admin) {
        AppResponseDto appResponseDto = adminService.signUp(admin);
        return ResponseEntity.ok(appResponseDto);
    }

    @GetMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDto loginDto) {
        AppResponseDto appResponseDto = adminService.login(loginDto);
        return ResponseEntity.ok(appResponseDto);
    }
}
