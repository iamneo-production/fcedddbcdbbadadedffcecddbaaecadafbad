package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Builder
@Data
public class ThemeModel {
	private int themeId;
	@NotBlank(message = "Please provide theme name")
	private String themeName;
	@NotEmpty(message = "please provide theme details")
	private String themeDetails;
	@NotNull(message = "Theme price must not be null")
	@Positive(message = "Theme price must be greater than zero")
	private Integer themePrice;
}
