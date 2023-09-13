package com.examly.springapp.service;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.ThemeModel;


public interface AdminService {
	public void saveAdmin(AdminModel admin);
	public void editTheme(ThemeModel themeModel, Integer themeId);
}
