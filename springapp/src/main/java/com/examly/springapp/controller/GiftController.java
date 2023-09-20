package com.examly.springapp.controller;

import com.examly.springapp.model.GiftModel;
import com.examly.springapp.service.GiftService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/admin")
@Tag(description = "Admin Endpoints", name = "Gift Controller")
public class GiftController {
    @Autowired
    private GiftService giftService;

    @PostMapping("/addGift")
    public ResponseEntity<GiftModel> addGift(@Valid @RequestBody GiftModel gift) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.giftService.addGift(gift));
    }

    @GetMapping("/gift")
    public ResponseEntity<List<GiftModel>> getGift(@RequestParam("id") String id){
       return ResponseEntity.ok(Arrays.asList(this.giftService.getGift(Integer.parseInt(id))));
    }

    @GetMapping("/gifts")
    public ResponseEntity<List<GiftModel>> getGifts(){
        return ResponseEntity.ok(this.giftService.getGifts());
    }

    @DeleteMapping("/deleteGift/{giftId}")
    public ResponseEntity<?> deleteGift(@PathVariable Integer giftId){
        this.giftService.deleteGift(giftId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
