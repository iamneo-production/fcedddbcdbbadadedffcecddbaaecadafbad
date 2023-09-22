package com.examly.springapp.service;

import com.examly.springapp.entity.Orders;
import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.model.ThemeModel;

import java.util.List;


public interface AdminService {
	public AdminModel saveAdmin(AdminModel admin);
	public void editTheme(ThemeModel themeModel, Integer themeId);
	public List<Orders> viewOrders();
	public List<OrderModel> viewOrderById(Integer orderId) throws Exception;
}
