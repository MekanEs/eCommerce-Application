import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/auth.slice';
import catalogReducer from './catalog/catalog.slice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
