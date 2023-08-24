import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import { productSlice } from './product/product.slice';
import userReducer from './user/user.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
