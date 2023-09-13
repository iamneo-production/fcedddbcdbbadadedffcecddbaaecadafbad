package com.examly.springapp.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserModel {
	private String email;
	private String password;
	private String mobileNumber;
	private String userRole;
}
