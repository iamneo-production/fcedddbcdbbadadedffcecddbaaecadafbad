package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;

public interface UserService {
    public void addUser(UserModel user);
    public UserModel getUser(Integer userId);
}
