package com.examly.springapp.service;

import com.examly.springapp.model.Order;

public interface OrderService {
    public Order addOrder(Order orderModel);
    public Order editOrder(Order orderModel, Integer orderId);
    public Order viewOrder(Integer orderId);
    public void deleteOrder(Integer orderId);
}
