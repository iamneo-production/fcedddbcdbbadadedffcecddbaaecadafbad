package com.gift.ordering.system.service;

import com.gift.ordering.system.model.UserModel;

public interface UserService {
    public void addUser(UserModel user);
    public UserModel getUser(Integer userId);
}
