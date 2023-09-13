package com.examly.springapp.service;


import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.ThemeModel;

import java.util.List;


public interface ThemeService {
    public void addTheme(ThemeModel theme);
    public ThemeModel getTheme(Integer themeId);
    public List<ThemeModel> getThemes();
    public void deleteTheme(Integer themeId);
}
