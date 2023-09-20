package com.examly.springapp.service;

import com.examly.springapp.model.OrderModel;

public interface OrderService {
    public OrderModel addOrder(OrderModel orderModel);
    public OrderModel editOrder(OrderModel orderModel, Integer orderId);
    public OrderModel viewOrder(Integer orderId);
    public void deleteOrder(Integer orderId);
}
