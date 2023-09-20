package com.examly.springapp.controller;

import com.examly.springapp.entity.User;
import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@Tag(description = "User Endpoints", name = "User Controller")
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<UserModel> addUser(@Valid @RequestBody UserModel user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.addUser(user));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserModel> getUser(@PathVariable String userId){
        return ResponseEntity.ok(this.userService.getUser(Integer.parseInt(userId)));
    }


}
