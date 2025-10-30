import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
};

type CartState = {
  items: CartItem[];
  totalQty: number;
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.totalQty += item.quantity;
      state.totalPrice += item.price * item.quantity;
    },
    

    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      state.totalQty -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    

    updateQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) return;

      state.totalQty += action.payload.qty - item.quantity;
      state.totalPrice += item.price * (action.payload.qty - item.quantity);
      item.quantity = action.payload.qty;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQty = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQty } = cartSlice.actions;

export default cartSlice.reducer;