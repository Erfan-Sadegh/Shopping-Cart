import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter({
    selectId: item => item.id
})

const initialState = productAdapter.getInitialState({
    status: 'idle'    
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            productAdapter.upsertMany(state, action.payload);
        }
    }
})

export const {
    selectAll: selectAllProducts,
    selectIds: selectProductIds,
    selectById: selectProductById
} = productAdapter.getSelectors();

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
