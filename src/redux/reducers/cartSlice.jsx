// creating an cart slice for cart items management
import { toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  caches: [],
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const duplicates = state.cartItems.filter(
        (item) => item.id === action.payload.id
      );
      if (duplicates.length > 0) {
        toast.success(' Item already exists in the added to the cart');
      } else {
        state.cartItems.push(action.payload);
        toast.success('Item added to the cart');
      }
    },
    setItemQuantityHigh: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity + 1;
          return item;
        } else {
          return item;
        }
      });
    },
    setItemQuantityLow: (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload?.id) {
          item.quantity =
            action.payload.quantity > 0 ? action.payload.quantity - 1 : 0;
          return item;
        } else {
          return item;
        }
      });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state, action) => (state.cartItems = []),
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  setItemQuantityHigh,
  setItemQuantityLow,
} = cartSlice.actions;
export default cartSlice.reducer;
