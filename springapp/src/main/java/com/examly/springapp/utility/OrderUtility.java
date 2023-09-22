package com.examly.springapp.utility;

import com.examly.springapp.entity.Gift;
import com.examly.springapp.entity.Orders;
import com.examly.springapp.entity.Theme;
import com.examly.springapp.model.GiftModel;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.model.ThemeModel;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class OrderUtility {

    public static OrderModel getOrderModel(Optional<Orders> order) {
        OrderModel orderModel;
        Orders orderEntity = order.get();

        Gift giftEntity = orderEntity.getGift();
        GiftModel giftModel = GiftModel.builder().giftId(giftEntity.getId())
                .giftImageUrl(giftEntity.getGiftImageUrl())
                .giftName(giftEntity.getGiftName())
                .giftDetails(giftEntity.getGiftDetails())
                .giftPrice(giftEntity.getGiftPrice())
                .build();
        List<Theme> themesEntities = orderEntity.getThemes();
        List<ThemeModel> themeModels = new ArrayList<>();

        for(Theme themeEntity : themesEntities) {
            ThemeModel themeModel = ThemeModel.builder().themeId(themeEntity.getId())
                    .themeDetails(themeEntity.getThemeDetails())
                    .themeName(themeEntity.getThemeName())
                    .themePrice(themeEntity.getThemePrice())
                    .build();
            themeModels.add(themeModel);
        }

        orderModel = OrderModel.builder().orderId(orderEntity.getOrderId())
                .orderName(orderEntity.getOrderName())
                .orderDescription(orderEntity.getOrderDescription())
                .orderPrice(orderEntity.getOrderPrice())
                .orderPhone(orderEntity.getOrderPhone())
                .orderDate(orderEntity.getOrderDate())
                .orderAddress(orderEntity.getOrderAddress())
                .gift(giftModel)
                .themes(themeModels)
                .build();
        return orderModel;
    }
}
