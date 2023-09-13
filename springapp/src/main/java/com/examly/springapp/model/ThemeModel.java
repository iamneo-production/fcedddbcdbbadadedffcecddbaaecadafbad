package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ThemeModel {
	private int themeId;
	private String themeName;
	private String themeDetails;
	private int themePrice;
}
