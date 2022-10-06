import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from "../reducers/cartSlice";

const store = configureStore({
  reducer: {
    cartData : cartReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;