package com.examly.springapp.service;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;

public interface AuthService {
    public Boolean isUserPresent(LoginModel login);
    public Boolean isAdminPresent(LoginModel login);
}
