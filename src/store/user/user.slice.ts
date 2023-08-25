import { createSlice } from '@reduxjs/toolkit';
import { ISliceUser } from '../../interfaces/sliceUser';



const initialState: ISliceUser = {
  firstName: null,
  lastName: null,
  dateBirth: null,
  email: null,
  address: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state) {
      return state;
    },
    removeUser(state) {
      state.firstName = null;
      state.lastName = null;
      state.dateBirth = null;
      state.email = null;
      state.address = null;
    },
  },
});

export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
