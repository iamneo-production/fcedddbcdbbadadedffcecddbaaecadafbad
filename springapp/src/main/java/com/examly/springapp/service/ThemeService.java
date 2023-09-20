package com.examly.springapp.service;


import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.ThemeModel;

import java.util.List;


public interface ThemeService {
    public ThemeModel addTheme(ThemeModel theme);
    public List<ThemeModel> getTheme(Integer themeId);
    public List<ThemeModel> getThemes();
    public void deleteTheme(Integer themeId);
}
