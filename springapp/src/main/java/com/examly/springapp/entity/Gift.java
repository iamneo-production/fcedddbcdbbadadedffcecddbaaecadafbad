package com.examly.springapp.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "gift")
@Data
public class Gift {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id; 
	@Column(name = "gift_name")
	private String giftName;
	@Column(name = "giftimageurl")
	private String giftImageUrl;
	@Column(name = "gift_details")
	private String giftDetails;
	@Column(name = "gift_price")
	private int giftPrice;
	@OneToOne(mappedBy = "gift")
	private Order order;
	
	
}
