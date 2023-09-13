package com.examly.springapp.service;


import com.gift.ordering.system.model.GiftModel;

import java.util.List;

public interface GiftService {
    public void addGift(GiftModel gift);
    public GiftModel getGift(Integer giftId);
    public List<GiftModel> getGifts();
    public void deleteGift(Integer giftId);
}
