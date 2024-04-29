//  creating an product slice for managing prduct data

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.products.map((item) => {
                return { ...item, quantity: 1 }
            });
            console.log(state.products)
        },
        getProducts: (state, action) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        getProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

//  exporting the products action reducers 
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;