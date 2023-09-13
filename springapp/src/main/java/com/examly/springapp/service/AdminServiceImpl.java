package com.examly.springapp.service;

import com.examly.springapp.entity.Admin;
import com.examly.springapp.entity.Theme;
import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.repository.AdminRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private ThemeRepository themeRepository;
	
	@Override
	public void saveAdmin(AdminModel admin){
		 Admin adminEntity= new Admin();
							adminEntity.setEmail(admin.getEmail());
		                   	adminEntity.setMobileNumber(admin.getMobileNumber());
							adminEntity.setPassword(admin.getPassword());
							adminEntity.setUserRole(admin.getUserRole());
		this.adminRepository.save(adminEntity);
		
	}

	@Override
	@Transactional
	public void editTheme(ThemeModel themeModel, Integer themeId) {
		Optional<Theme> optionalTheme =this.themeRepository.findById(themeId);
		if(optionalTheme.isPresent()){
			Theme theme=optionalTheme.get();
			theme.setThemeName(themeModel.getThemeName());
			theme.setThemeDetails(themeModel.getThemeDetails());
			theme.setThemePrice(themeModel.getThemePrice());
		}

	}


}
