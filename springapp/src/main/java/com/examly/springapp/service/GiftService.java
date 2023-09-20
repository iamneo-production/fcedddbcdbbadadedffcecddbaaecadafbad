package com.examly.springapp.service;


import com.examly.springapp.model.GiftModel;

import java.util.List;

public interface GiftService {
    public GiftModel addGift(GiftModel gift);
    public GiftModel getGift(Integer giftId);
    public List<GiftModel> getGifts();
    public void deleteGift(Integer giftId);
}
