import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import { productSlice } from './product/product.slice';
import userReducer from './user/user.slice';
import catalogReducer from './catalog/catalog.slice';
import filterReducer from './productFilter/productFilter.slice';
import discounts from './discount/discount.slice';
import basket from './basket/basketSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    catalog: catalogReducer,
    product: productSlice.reducer,
    filter: filterReducer,
    discounts,
    basket,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
