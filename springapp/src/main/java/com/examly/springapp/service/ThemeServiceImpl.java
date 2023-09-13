package com.examly.springapp.service;


import com.examly.springapp.entity.Theme;
import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ThemeServiceImpl implements ThemeService {

    @Autowired
    private ThemeRepository themeRepository;

    @Override
    public void addTheme(ThemeModel themeModel) {
        Theme themeEntity = new Theme();
        themeEntity.setThemeName(themeModel.getThemeName());
        themeEntity.setThemeDetails(themeModel.getThemeDetails());
        themeEntity.setThemePrice(themeModel.getThemePrice());
        this.themeRepository.save(themeEntity);

    }

    @Override
    public ThemeModel getTheme(Integer themeId) {
        ThemeModel themeModel = null;
        Optional<Theme> themeEntity = this.themeRepository.findById(themeId);
        if (themeEntity.isPresent()) {
            Theme theme = themeEntity.get();
            themeModel = ThemeModel.builder()
                    .themeName(theme.getThemeName())
                    .themeDetails(theme.getThemeDetails())
                    .themePrice(theme.getThemePrice())
                    .build();

        }
        return themeModel;
    }

    @Override
    public List<ThemeModel> getThemes() {
        List<ThemeModel> themeModels = new ArrayList<>();
        List<Theme> themeEntities = this.themeRepository.findAll();
        for (Theme themeEntity : themeEntities) {
            ThemeModel themeModel = ThemeModel.builder()
                    .themeName(themeEntity.getThemeName())
                    .themeDetails(themeEntity.getThemeDetails())
                    .themePrice(themeEntity.getThemePrice())
                    .build();
            themeModels.add(themeModel);

        }
        return themeModels;
    }

    @Override
    public void deleteTheme(Integer themeId) {
        themeRepository.deleteById(themeId);
    }
}
