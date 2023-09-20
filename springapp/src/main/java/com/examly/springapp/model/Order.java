package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.Date;
import java.util.List;

@Builder
@Data
public class Order {
	private Integer orderId;
	@NotBlank(message = "")
	private String orderName;
	@NotBlank(message = "")
	private String orderDescription;
	@NotBlank(message = "Please provide themes")
	private List<ThemeModel> themes;
	@NotBlank(message = "Please provide gift details")
	private GiftModel gift;
	@NotBlank(message = "Please provide order date")
	private Date orderDate;
	@Positive(message = "Please provide order price")
	private int orderPrice;
	@NotBlank(message = "Please provide order address")
	private String orderAddress;
	@NotBlank(message = "Please provide order phone")
	private String orderPhone;
	@NotBlank(message = "Please provide order email")
	private String orderEmail;
}
