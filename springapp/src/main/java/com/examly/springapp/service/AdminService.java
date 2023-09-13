package com.examly.springapp.service;

import com.gift.ordering.system.model.AdminModel;
import com.gift.ordering.system.model.ThemeModel;


public interface AdminService {
	public void saveAdmin(AdminModel admin);
	public void editTheme(ThemeModel themeModel, Integer themeId);
}
