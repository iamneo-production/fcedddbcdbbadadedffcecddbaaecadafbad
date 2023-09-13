package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GiftModel {
	private int giftId;
	private String giftName;
	private String giftImageUrl;
	private String giftDetails;
	private int giftPrice;
	private int quantity;
}
