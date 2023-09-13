package com.examly.springapp.entity;

import java.util.Date;

import com.examly.springapp.entity.Theme;
import com.examly.springapp.entity.Gift;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "orders")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    @Column(name = "order_name")
	private String orderName;
    @Column(name = "order_desc")
	private String orderDescription;
	@OneToOne
	@JoinColumn(name="theme_id")
	private Theme theme;
	@OneToOne
	@JoinColumn(name="gift_id")
	private Gift gift;
    @Column(name = "order_date")
	private Date orderDate;
    @Column(name = "order_price")
	private int orderPrice;
    @Column(name = "order_address")
	private String orderAddress;
    @Column(name = "order_phone")
	private String orderPhone;
    @Column(name = "order_email")
	private String orderEmail;
}
