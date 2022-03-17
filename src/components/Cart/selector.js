import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cart;

// lay danh sach trong cart
const cartItemList = createSelector(cartItemSelector, (cartItem) => cartItem);
// count number product in cart
const cartItemCountSelector = createSelector(cartItemSelector, (cartItem) => cartItem.length);

export { cartItemList, cartItemCountSelector };
