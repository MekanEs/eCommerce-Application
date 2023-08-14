import { createSlice } from '@reduxjs/toolkit';
import { ISliceUser } from '../../interfaces/interfaces';

const initialState: ISliceUser = {
  email: null,
  id: null,
  clientID: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.clientID = action.payload.clientID;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.clientID = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
