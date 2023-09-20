package com.examly.springapp.controller;

import com.examly.springapp.model.OrderModel;
import com.examly.springapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/user/addOrder")
    public ResponseEntity<OrderModel> addOrder(@Valid @RequestBody OrderModel orderModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.orderService.addOrder(orderModel));
    }

    @PutMapping("/user/editOrder/{orderId}")
    public ResponseEntity<OrderModel> editOrder(@Valid @RequestBody OrderModel orderModel, @PathVariable Integer orderId){
        return ResponseEntity.ok(this.orderService.editOrder(orderModel, orderId));
    }

    @GetMapping("/user/{orderId}")
    public ResponseEntity<OrderModel> viewOrderById(@PathVariable Integer orderId){
        return ResponseEntity.ok(this.orderService.viewOrder(orderId));
    }

    @PutMapping("/user/deleteOrder/{orderId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editOrder(@PathVariable Integer orderId){
        this.orderService.deleteOrder(orderId);
    }
}
