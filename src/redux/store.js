//  creating an redux store for state management 

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";

const store = configureStore({
    reducer:{
        products:productSlice,
        user:userSlice,
        cart:cartSlice
    }
})


export default store;