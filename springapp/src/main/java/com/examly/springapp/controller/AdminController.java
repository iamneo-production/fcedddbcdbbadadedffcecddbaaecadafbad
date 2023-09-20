package com.examly.springapp.controller;

import com.examly.springapp.entity.Order;
import com.examly.springapp.model.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.AdminService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
@Tag(description = "Admin Endpoints", name = "Admin Controller")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping("/signup")
	public ResponseEntity<AdminModel> saveAdmin(@Valid @RequestBody AdminModel admin) {
		return ResponseEntity.status(HttpStatus.CREATED).body(this.adminService.saveAdmin(admin));
	}

	@PutMapping("/editTheme/{themeId}")
	public void editTheme(@Valid @RequestBody ThemeModel themeModel, @PathVariable Integer themeId){
		this.adminService.editTheme(themeModel,themeId);
	}

	@GetMapping("/orders")
	public ResponseEntity<List<Order>> viewOrders(){
		return ResponseEntity.ok(this.adminService.viewOrders());
	}

	@GetMapping("/order")
	public ResponseEntity<List<OrderModel>> viewOrderById(@RequestParam("id") String orderId) throws Exception {
		return ResponseEntity.ok(this.adminService.viewOrderById(Integer.parseInt(orderId)));
	}


}
