package com.examly.springapp.controller;

import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class ThemeController {
    @Autowired
    private ThemeService themeService;

    @PostMapping("/addTheme")
    public void addTheme(@RequestBody ThemeModel theme) {
        this.themeService.addTheme(theme);
    }

    @GetMapping("/{themeId}")
    public ThemeModel getTheme(@PathVariable Integer themeId){
        return this.themeService.getTheme(themeId);
    }

    @GetMapping("/getThemes")
    public List<ThemeModel> getThemes(){
        return this.themeService.getThemes();
    }

    @DeleteMapping("/deleteTheme/{themeId}")
    public void deleteTheme(@PathVariable Integer themeId){
        this.themeService.deleteTheme(themeId);
    }

}
