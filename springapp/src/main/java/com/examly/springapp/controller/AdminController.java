package com.examly.springapp.controller;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.ThemeModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.examly.springapp.service.AdminService;

@RestController
@RequestMapping("/admin")

public class AdminController {
	@Autowired
	private AdminService adminService;
	public Boolean isAdminPresent(LoginModel login) {
		return true;
	}
	
	@PostMapping("/signup")
	public void saveAdmin(@RequestBody AdminModel admin) {
		this.adminService.saveAdmin(admin);
	}

	@PutMapping("/editTheme/{themeId}")
	public void editTheme(@RequestBody ThemeModel themeModel, @PathVariable Integer themeId){
		this.adminService.editTheme(themeModel,themeId);
	}

}
