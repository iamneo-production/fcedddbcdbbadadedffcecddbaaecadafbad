package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class OrderModel {
	private String orderName;
	private String orderDescription;
	private ThemeModel theme;
	private GiftModel gift;
	private Date orderDate;
	private int orderPrice;
	private String orderAddress;
	private String orderPhone;
	private String orderEmail;
}
