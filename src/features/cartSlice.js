import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
  selectId: (item) => item.id,
});

const initialState = cartAdapter.getInitialState({
  totalQuantity: 0,
  totalPrice: 0,
});

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;

      cartAdapter.addOne(state, action.payload);

      state.totalQuantity += item.quantity;
    },
    removeProduct: (state, action) => {
      const item = state.entities[action.payload];

      cartAdapter.removeOne(state, action.payload);

      state.totalQuantity -= item.quantity;
    },
    increase: (state, action) => {
      const { id } = action.payload;

      const itemInCart = state.entities[id];
      if (itemInCart) {
        itemInCart.quantity++;
      }
      state.totalQuantity++;
    },
    decrease: (state, action) => {
      const { id } = action.payload;

      const itemInCart = state.entities[id];  

        if (itemInCart.quantity > 1) {
          itemInCart.quantity -= 1;
          state.totalQuantity--;
        } else {
         (itemInCart.quantity = 1);
        }
    },
  },
});

export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors();

export const { addProduct, removeProduct, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
