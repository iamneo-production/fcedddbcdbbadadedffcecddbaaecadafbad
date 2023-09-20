package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@Builder
public class AdminModel {
	@NotBlank(message = "Please provide email")
	@Email(message = "Please provide valid email")
	private String email;
	@NotBlank(message = "Please provide provide")
	private String password;
	@NotBlank(message = "Please provide mobileNumber")
	private String mobileNumber;
	@NotBlank(message = "Please provide adminRole")
	private String adminRole;
}
