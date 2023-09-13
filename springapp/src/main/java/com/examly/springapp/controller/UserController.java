package com.gift.ordering.system.api;

import com.gift.ordering.system.model.LoginModel;
import com.gift.ordering.system.model.UserModel;
import com.gift.ordering.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    public Boolean isUserPresent(LoginModel login) {
        return true;

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
