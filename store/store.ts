import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartReducer";
import authReducer from "./auth/";
import productReducer from "./products";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
