import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
    selectId: item => item.id
})

const initialState = cartAdapter.getInitialState({
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    status: 'idle'    
})

const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export default cartSlice.reducer;
