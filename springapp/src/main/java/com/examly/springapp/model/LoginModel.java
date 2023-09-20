package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Builder
@Data
public class LoginModel {
	@NotBlank(message = "Please provide email")
	@Email(message = "Please provide valid email")
	private String email;
	@NotBlank(message = "Please provide password")
	private String password;
}
