import {
  ClientResponse,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISliceUser } from '../../interfaces/sliceUser';
import { CTP_PROJECT_KEY, getApiRoot } from '../../services/ClientBuilder';
import { logUser } from '../../types/types';

const initialState: ISliceUser = {
  status: null,
  error: null,
  email: null,
  id: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (options: logUser, { rejectWithValue }) {
    try {
      const result: ClientResponse<CustomerSignInResult> = await getApiRoot()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .login()
        .post({
          body: {
            email: options.email,
            password: options.password,
          },
        })
        .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.status = null;
      state.error = null;
      state.email = null;
      state.id = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'successfully';
        if (action.payload) {
          state.email = action.payload.body.customer.email;
          state.id = action.payload.body.customer.id;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error';
        console.log(action.payload);
      });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
