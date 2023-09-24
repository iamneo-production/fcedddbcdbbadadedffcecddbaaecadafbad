package com.examly.springapp.service;


import com.examly.springapp.entity.Gift;
import com.examly.springapp.model.GiftModel;
import com.examly.springapp.repository.GiftRepository;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GiftServiceImpl implements GiftService{
    @Autowired
    private GiftRepository giftRepository;

    @Override
    public GiftModel addGift(GiftModel gift) {
        Gift giftEntity = new Gift();
        giftEntity.setGiftName(gift.getGiftName());
        giftEntity.setGiftImageUrl(gift.getGiftImageUrl());
        giftEntity.setGiftDetails(gift.getGiftDetails());
        giftEntity.setGiftPrice(gift.getGiftPrice());
        giftEntity.setQuantity(gift.getQuantity());
        this.giftRepository.save(giftEntity);
        return GiftModel.builder().giftId(giftEntity.getId())
                .giftName(gift.getGiftName())
                .giftDetails(gift.getGiftDetails())
                .giftPrice(giftEntity.getGiftPrice())
                .giftImageUrl(giftEntity.getGiftImageUrl())
                .giftQuantity(giftEntity.getQuantity());
                 build();
    }

    @Override
    public GiftModel getGift(Integer giftId) {
        GiftModel giftModel= null;
        Optional<Gift> giftEntity = this.giftRepository.findById(giftId);
        if(giftEntity.isPresent()){
            Gift gift=giftEntity.get();
            giftModel= giftModel.builder()
                    .giftId(gift.getId())
                    .giftName(gift.getGiftName())
                    .giftImageUrl(gift.getGiftImageUrl())
                    .giftDetails(gift.getGiftDetails())
                    .giftPrice(gift.getGiftPrice())
                    .build();

        }
        return giftModel;
    }

    @Override
    public List<GiftModel> getGifts() {
        List<GiftModel> giftModels= new ArrayList<>();
        List<Gift> giftEntities = this.giftRepository.findAll();
        for(Gift giftEntity:giftEntities){
            GiftModel giftModel= GiftModel.builder()
                    .giftName(giftEntity.getGiftName())
                    .giftImageUrl(giftEntity.getGiftImageUrl())
                    .giftDetails(giftEntity.getGiftDetails())
                    .giftPrice(giftEntity.getGiftPrice())
                    .build();
            giftModels.add(giftModel);

        }
        return giftModels;
    }

    @Override
    public void deleteGift(Integer giftId) {
        giftRepository.deleteById(giftId);
    }
}
