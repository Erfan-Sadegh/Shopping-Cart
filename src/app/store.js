import { configureStore } from '@reduxjs/toolkit';
import { productSlice, cartSlice } from '../features';

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
