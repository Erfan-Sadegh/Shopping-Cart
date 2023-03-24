import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
  selectId: (item) => item.id,
});

const initialState = cartAdapter.getInitialState({
  totalQuantity: 0,
  totalPrice: 0,
  status: 'idle',
});

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: cartAdapter.addOne,
    removeProduct: (state, action) => cartAdapter.removeOne(state, action.payload),
  },
});

export const {
     selectAll: selectAllCartItems, 
    } = cartAdapter.getSelectors();

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
