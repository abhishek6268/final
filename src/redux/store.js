//  creating an redux store for state management

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";
import favouriteSlice from "./reducers/favouriteSlice";
import dynamic from "./reducers/Dynamic";


const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
    cart: cartSlice,
    favourite: favouriteSlice,
    dynamic:dynamic
  },
});

export default store;
