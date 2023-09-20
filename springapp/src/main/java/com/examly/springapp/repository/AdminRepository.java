package com.examly.springapp.repository;

import com.examly.springapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examly.springapp.entity.Admin;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{
    Optional<Admin> findByEmail(String email);
}
