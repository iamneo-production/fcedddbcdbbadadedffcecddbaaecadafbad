package com.examly.springapp.controller;

import com.examly.springapp.model.GiftModel;
import com.examly.springapp.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;

@RestController
@RequestMapping("/admin")
@Tag(description = "Admin Endpoints", name = "Gift Controller")
public class GiftController {
    @Autowired
    private GiftService giftService;

    @PostMapping("/addGift")
    public void addGift(@RequestBody GiftModel gift) {
        this.giftService.addGift(gift);
    }

    @GetMapping("/gift")
    public GiftModel getGift(@RequestParam Integer id){
        return this.giftService.getGift(id);
    }

    @GetMapping("/getGifts")
    public List<GiftModel> getGifts(){
        return this.giftService.getGifts();
    }

    @DeleteMapping("/deleteGift/{giftId}")
    public void deleteGift(@PathVariable Integer giftId){
        this.giftService.deleteGift(giftId);
    }
}
