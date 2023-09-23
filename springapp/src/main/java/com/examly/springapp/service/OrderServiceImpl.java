package com.examly.springapp.service;

import com.examly.springapp.entity.Gift;
import com.examly.springapp.entity.Orders;
import com.examly.springapp.entity.Theme;
import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.Order;
import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.repository.OrderRepository;
import com.examly.springapp.repository.ThemeRepository;
import com.examly.springapp.utility.OrderUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ThemeRepository themeRepository;

    @Override
    public Order addOrder(Order orderModel) {
        Orders orderEntity = new Orders();

        GiftModel giftModel = orderModel.getGift();
        Gift giftEntity = new Gift();
        giftEntity.setGiftName(giftModel.getGiftName());
        giftEntity.setGiftImageUrl(giftModel.getGiftImageUrl());
        giftEntity.setGiftPrice(giftModel.getGiftPrice());
        giftEntity.setGiftDetails(giftModel.getGiftDetails());

        // Create a list of theme IDs associated with the order
        List<Integer> themeIds = new ArrayList<>();

        for (ThemeModel themeModel : orderModel.getThemes()) {
            // Assuming themeModel contains the IDs of the existing themes
            themeIds.add(themeModel.getThemeId());
        }

        orderEntity.setOrderAddress(orderModel.getOrderAddress());
        orderEntity.setOrderDate(orderModel.getOrderDate());
        orderEntity.setOrderEmail(orderModel.getOrderEmail());
        orderEntity.setOrderName(orderModel.getOrderName());
        orderEntity.setOrderDescription(orderModel.getOrderDescription());
        orderEntity.setOrderPhone(orderModel.getOrderPhone());
        orderEntity.setOrderPrice(orderModel.getOrderPrice());

        // Set the gift associated with the order
        orderEntity.setGift(giftEntity);

        // Fetch the existing Theme entities by their IDs
        List<Theme> themeEntities = this.themeRepository.findAllById(themeIds);

        // Set the themes associated with the order
        orderEntity.setThemes(themeEntities);

        // Save the order entity, including gift and themes associations
        this.orderRepository.save(orderEntity);
        orderModel.setOrderId(orderEntity.getOrderId());
        return orderModel;
    }

    @Override
    public Order editOrder(Order orderModel, Integer orderId) {
        Optional<Orders> order = this.orderRepository.findById(orderId);
        if(order.isPresent()){
            Orders orderEntity = order.get();
            GiftModel giftModel = orderModel.getGift();
            Gift giftEntity = orderEntity.getGift();
            giftEntity.setGiftName(giftModel.getGiftName());
            giftEntity.setGiftImageUrl(giftModel.getGiftImageUrl());
            giftEntity = orderEntity.getGift();
            giftEntity.setGiftName(giftModel.getGiftName());
            giftEntity.setGiftImageUrl(giftModel.getGiftImageUrl());
            giftEntity.setGiftPrice(giftModel.getGiftPrice());
            giftEntity.setGiftDetails(giftModel.getGiftDetails());

            // Create a list of theme IDs associated with the order
            List<Integer> themeIds = new ArrayList<>();
            for (ThemeModel themeModel : orderModel.getThemes()) {
                // Assuming themeModel contains the IDs of the existing themes
                themeIds.add(themeModel.getThemeId());
            }

            orderEntity.setOrderAddress(orderModel.getOrderAddress());
            orderEntity.setOrderDate(orderModel.getOrderDate());
            orderEntity.setOrderEmail(orderModel.getOrderEmail());
            orderEntity.setOrderName(orderModel.getOrderName());
            orderEntity.setOrderDescription(orderModel.getOrderDescription());
            orderEntity.setOrderPhone(orderModel.getOrderPhone());
            orderEntity.setOrderPrice(orderModel.getOrderPrice());

            // Set the gift associated with the order
            orderEntity.setGift(giftEntity);

            // Fetch the existing Theme entities by their IDs
            List<Theme> themeEntities = this.themeRepository.findAllById(themeIds);

            // Set the themes associated with the order
            orderEntity.setThemes(themeEntities);

            // Save the order entity, including gift and themes associations
            this.orderRepository.save(orderEntity);
            orderModel.setOrderId(orderEntity.getOrderId());
        }
        return orderModel;
    }

    @Override
    public Order viewOrder(Integer orderId) {
        Optional<Orders> order = this.orderRepository.findByOrderId(orderId);
        OrderModel orderModel = null;
        if(order.isPresent()){
            orderModel = OrderUtility.getOrderModel(order);
        }
        return orderModel;
    }



    @Override
    public void deleteOrder(Integer orderId) {
        this.orderRepository.deleteById(orderId);
    }
}
