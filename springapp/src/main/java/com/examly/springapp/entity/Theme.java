package com.examly.springapp.entity;

import javax.persistence.*;
import lombok.*;


@Entity
@Table(name = "theme")
@Data
public class Theme {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "theme_name")
	private String themeName;
	@Column(name = "theme_details")
	private String themeDetails;
	@Column(name = "theme_price")
	private int themePrice;
}
