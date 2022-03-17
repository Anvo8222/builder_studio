import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk(
  'user/register',
  async (payload) => {
    // call api to register

    // save data to local storage
  },
);
// const initialState = { value: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // showCart: false,
    cart: [],
  },
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cart.findIndex((x) => x.id === newItem.productItem.id);
      if (index < 0) {
        state.cart.push(newItem);
      } else if (index >= 0) {
        state.cart.find((x) => x.productItem.id === newItem.productItem.id);
      }
    },
    removeFromCart(state, action) {
      const idNeedRemove = action.payload;
      state.cart = state.cart.filter((x) => x.id !== idNeedRemove);
    },
    removeCart(state, action) {
      state.cart = [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showCart, hideCart, addToCart, removeFromCart, removeCart,
} = actions;
export default reducer;
