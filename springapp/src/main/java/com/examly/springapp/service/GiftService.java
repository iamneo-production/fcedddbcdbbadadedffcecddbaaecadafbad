package com.examly.springapp.service;


import com.examly.springapp.model.GiftModel;

import java.util.List;

public interface GiftService {
    public void addGift(GiftModel gift);
    public GiftModel getGiftById(Integer giftId);
    public List<GiftModel> getGiftAll();
    public void deleteGift(Integer giftId);
}
