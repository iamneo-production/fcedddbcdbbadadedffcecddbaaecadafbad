package com.examly.springapp.controller;

import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.service.ThemeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/admin")
@Tag(description = "Admin Endpoints", name = "Theme Controller")
public class ThemeController {
    @Autowired
    private ThemeService themeService;

    @PostMapping("/addTheme")
    public ResponseEntity<ThemeModel> addTheme(@Valid @RequestBody ThemeModel themeModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.themeService.addTheme(themeModel));
    }

    @GetMapping("/theme/{id}")
    public ResponseEntity<List<ThemeModel>> getTheme(@RequestParam("id") String id){
        return ResponseEntity.ok(this.themeService.getTheme(Integer.parseInt(id)));
    }

    @GetMapping("/theme")
    public ResponseEntity<List<ThemeModel>> getThemes(){
        return ResponseEntity.ok(this.themeService.getThemes());
    }

    @DeleteMapping("/deleteTheme/{themeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTheme(@PathVariable Integer themeId){
        this.themeService.deleteTheme(themeId);
    }

}
