import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import userReducer from './user/user.slice';
import catalogReducer from './catalog/catalog.slice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
