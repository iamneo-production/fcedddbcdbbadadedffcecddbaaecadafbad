package com.examly.springapp.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
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
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;
    @Column(name = "order_name")
	private String orderName;
    @Column(name = "order_desc")
	private String orderDescription;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "order_themes",
			joinColumns = @JoinColumn(name = "order_id"),
			inverseJoinColumns = @JoinColumn(name = "theme_id")
	)
	private List<Theme> themes = new ArrayList<>();
	@OneToOne(cascade = CascadeType.ALL)
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
