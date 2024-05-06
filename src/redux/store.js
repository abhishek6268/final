//  creating an redux store for state management

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";
import favouriteSlice from "./reducers/favouriteSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
    cart: cartSlice,
    favourite: favouriteSlice,
  },
});

export default store;
