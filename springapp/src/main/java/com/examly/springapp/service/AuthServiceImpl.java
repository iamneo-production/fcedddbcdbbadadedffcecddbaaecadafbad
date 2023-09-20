package com.examly.springapp.service;

import com.examly.springapp.entity.Admin;
import com.examly.springapp.entity.User;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Boolean isUserPresent(LoginModel login) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return this.userRepository.findByEmail(login.getEmail())
                .map(userEntity -> bCryptPasswordEncoder.matches(login.getPassword(), userEntity.getPassword()))
                .orElse(false);
    }

    @Override
    public Boolean isAdminPresent(LoginModel login) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return this.userRepository.findByEmail(login.getEmail())
                .map(adminEntity -> bCryptPasswordEncoder.matches(login.getPassword(), adminEntity.getPassword()))
                .orElse(false);
    }
}
