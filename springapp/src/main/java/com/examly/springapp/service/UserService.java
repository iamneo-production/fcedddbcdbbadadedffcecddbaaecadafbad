package com.examly.springapp.service;

import com.gift.ordering.system.model.UserModel;

public interface UserService {
    public void addUser(UserModel user);
    public UserModel getUser(Integer userId);
}
