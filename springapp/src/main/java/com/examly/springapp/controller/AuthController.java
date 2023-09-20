package com.examly.springapp.controller;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.service.AuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@Tag(description = "Authentication Endpoint", name = "Auth Controller")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("user/login")
    public Boolean isUserPresent(@Valid @RequestBody LoginModel login) {
        return this.authService.isUserPresent(login);
    }

    @PostMapping("admin/login")
    public Boolean isAdminPresent(@Valid @RequestBody LoginModel login) {
        return this.authService.isAdminPresent(login);
    }


}
