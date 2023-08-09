import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
});

export default authorizationSlice.reducer;
