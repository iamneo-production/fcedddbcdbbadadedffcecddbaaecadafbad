package com.examly.springapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.*;

@Builder
@Data
public class GiftModel {
	private int giftId;
	@NotBlank(message = "Please provide gift name")
	private String giftName;
	@NotBlank(message = "Please provide gift image url")
	private String giftImageUrl;
	@NotEmpty(message = "Please provide gift details")
	private String giftDetails;
	@NotNull(message = "Gift price must not be null")
	@Positive(message = "Gift price must be greater than zero")
	private Integer giftPrice;
	@NotNull(message = "Quantity must not be null")
	@Positive(message = "Quantity and must be greater than zero")
	private Integer quantity;
}
