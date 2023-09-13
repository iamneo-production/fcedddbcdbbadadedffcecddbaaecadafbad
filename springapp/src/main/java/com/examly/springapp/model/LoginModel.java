package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LoginModel {
	private String email;
	private String password;
}
