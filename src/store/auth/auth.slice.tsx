import {
  ClientResponse,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISliceUser } from '../../interfaces/sliceUser';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootLogin, getApiRootRegis } from '../../services/ClientBuilder';
import { logUser, regUser } from '../../types/auth';

const initialState: ISliceUser = {
  status: null,
  message: null,
  id: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (options: logUser, { rejectWithValue }) {
    const email = options.email;
    const password = options.password;
    try {
      const result: ClientResponse<CustomerSignInResult> =
        await getApiRootLogin(email, password)
          .withProjectKey({ projectKey: CTP_PROJECT_KEY })
          .login()
          .post({
            body: {
              email: email,
              password: password,
            },
          })
          .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async function (options: regUser, { rejectWithValue }) {
    try {
      const result: ClientResponse<CustomerSignInResult> =
        await getApiRootRegis()
          .withProjectKey({ projectKey: CTP_PROJECT_KEY })
          .customers()
          .post({
            body: {
              email: options.email,
              password: options.password,
              firstName: options.firstName,
              lastName: options.lastName,
              dateOfBirth: options.dateOfBirth,
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
    getUser(state) {
      return state;
    },
    removeUser(state) {
      state.status = null;
      state.message = null;
      state.id = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loginUser.pending, (state) => {
        state.status = null;
        state.message = null;
        state.id = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'ok';
        state.message = 'successfully';
        if (action.payload) {
          state.id = action.payload.body.customer.id;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      })
      .addCase(registrationUser.pending, (state) => {
        state.status = null;
        state.message = null;
        state.id = null;
      })
      .addCase(registrationUser.fulfilled, (state) => {
        state.status = 'ok';
        state.message = 'successfully';
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
