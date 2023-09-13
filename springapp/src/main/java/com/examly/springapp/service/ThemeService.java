package com.gift.ordering.system.service;


import com.gift.ordering.system.model.GiftModel;
import com.gift.ordering.system.model.ThemeModel;

import java.util.List;


public interface ThemeService {
    public void addTheme(ThemeModel theme);
    public ThemeModel getTheme(Integer themeId);
    public List<ThemeModel> getThemes();
    public void deleteTheme(Integer themeId);
}
