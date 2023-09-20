package com.examly.springapp.service;

import com.examly.springapp.entity.User;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserModel addUser(UserModel userModel) {
        User user = new User();
        user.setEmail(userModel.getEmail());
        user.setPassword(passwordEncoder.encode(userModel.getPassword()));
        user.setMobileNumber(userModel.getMobileNumber());
        user.setUserRole(userModel.getUserRole());
        User userEntity = this.userRepository.save(user);
        return UserModel.builder()
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .mobileNumber(userEntity.getMobileNumber())
                .userRole(userEntity.getUserRole())
                .build();
    }

    public UserModel getUser(Integer userId) {
        UserModel userModel= null;
        Optional<User> userEntity = this.userRepository.findById(userId);
        if(userEntity.isPresent()){
            User user=userEntity.get();
            userModel= userModel.builder()
                    .email(user.getEmail())
                    .password(user.getPassword())
                    .mobileNumber(user.getMobileNumber())
                    .userRole(user.getUserRole())
                    .build();

        }
        return userModel;
    }
}
