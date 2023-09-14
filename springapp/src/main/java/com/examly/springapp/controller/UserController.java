package com.examly.springapp.controller;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/user")
@Tag(description = "User Endpoints", name = "User Controller")
public class UserController {
    @Autowired
    private UserService userService;
    public Boolean isUserPresent(LoginModel login) {
        return true;

    }

    @GetMapping
    public String test(){
        return "Hello World";
    }

    @PostMapping("/signup")
    public void addUser(@RequestBody UserModel user) {
        this.userService.addUser(user);
    }

    @GetMapping("/{userId}")
    public UserModel getUser(@PathVariable Integer userId){
        return this.userService.getUser(userId);
    }
}
