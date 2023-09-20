package com.examly.springapp.service;

import com.examly.springapp.entity.Admin;
import com.examly.springapp.entity.Orders;
import com.examly.springapp.entity.Theme;
import com.examly.springapp.entity.User;
import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.Order;
import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.repository.OrderRepository;
import com.examly.springapp.repository.ThemeRepository;
import com.examly.springapp.utility.OrderUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.repository.AdminRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private ThemeRepository themeRepository;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public AdminModel saveAdmin(AdminModel adminModel) {
		Admin admin = new Admin();
		admin.setEmail(adminModel.getEmail());
		admin.setPassword(passwordEncoder.encode(adminModel.getPassword()));
		admin.setMobileNumber(adminModel.getMobileNumber());
		admin.setAdminRole(adminModel.getAdminRole());
		Admin adminEntity = this.adminRepository.save(admin);
		return AdminModel.builder()
				.email(adminEntity.getEmail())
				.password(adminEntity.getPassword())
				.mobileNumber(adminEntity.getMobileNumber())
				.adminRole(adminEntity.getAdminRole())
				.build();
	}

	@Override
	@Transactional
	public void editTheme(ThemeModel themeModel, Integer themeId) {
		Optional<Theme> optionalTheme =this.themeRepository.findById(themeId);
		if(optionalTheme.isPresent()){
			Theme theme=optionalTheme.get();
			theme.setThemeName(themeModel.getThemeName());
			theme.setThemeDetails(themeModel.getThemeDetails());
			theme.setThemePrice(themeModel.getThemePrice());
		}
	}

	@Override
	public List<Order> viewOrders(){
		return this.orderRepository.findAll();
	}

	@Override
	public List<Orders> viewOrderById(Integer orderId) throws Exception {
		Optional<Order> order = this.orderRepository.findByOrderId(orderId);
		Order orderModel = null;
		if(order.isPresent()){
			orderModel = OrderUtility.getOrder(order);
		}
		return Arrays.asList(orderModel);
	}
}
