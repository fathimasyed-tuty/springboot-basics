package com.fathima.springbootbackend.repository;

import com.fathima.springbootbackend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmailId(String emailId);
}
