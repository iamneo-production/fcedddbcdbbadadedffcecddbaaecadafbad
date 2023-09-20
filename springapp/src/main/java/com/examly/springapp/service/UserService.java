package com.examly.springapp.service;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;

public interface UserService {
    public UserModel addUser(UserModel user);
    public UserModel getUser(Integer userId);
}
