package com.examly.springapp.service;

import com.examly.springapp.entity.User;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(UserModel user) {
        User userEntity= new User();
                userEntity.setEmail(user.getEmail());
                userEntity.setPassword(user.getPassword());
                userEntity.setMobileNumber(user.getMobileNumber());
                userEntity.setUserRole(user.getUserRole());
        this.userRepository.save(userEntity);

    }

    @Override
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