import {
  ClientResponse,
  CustomerSignInResult,
  Project,
} from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISliceAuth } from '../../interfaces/sliceAuth';
import { CTP_PROJECT_KEY } from '../../services';
import {
  getApiRootLogin,
  getApiRootRegis,
  getApiRootToken,
} from '../../services/ClientBuilder';
import { logUser, regUser } from '../../types/auth';
import { getAddress } from '../../utils/helpers/address/getAddress';

const initialState: ISliceAuth = {
  status: null,
  message: null,
  id: localStorage.getItem('id') || null,
  isAuth: !!localStorage.getItem('token'),
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (options: logUser, { rejectWithValue }) {
    const email = options.email;
    const password = options.password;
    const anonymId = options.anonymId;
    try {
      const result: ClientResponse<CustomerSignInResult> =
        await getApiRootLogin(email, password)
          .withProjectKey({ projectKey: CTP_PROJECT_KEY })
          .login()
          .post({
            body: {
              email: email,
              password: password,
              anonymousCart: { id: anonymId, typeId: 'cart' },
              anonymousCartSignInMode: 'MergeWithExistingCustomerCart',
            },
          })
          .execute();

      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const loginUserRegister = createAsyncThunk(
  'authReg/loginUser',
  async function (options: logUser, { rejectWithValue }) {
    const email = options.email;
    const password = options.password;
    const anonymId = options.anonymId;
    try {
      if (anonymId) {
        const result: ClientResponse<CustomerSignInResult> =
          await getApiRootLogin(email, password)
            .withProjectKey({ projectKey: CTP_PROJECT_KEY })
            .login()
            .post({
              body: {
                email: email,
                password: password,
                anonymousCart: { id: anonymId, typeId: 'cart' },
                anonymousCartSignInMode: 'UseAsNewActiveCustomerCart',
              },
            })
            .execute();

        return result;
      } else {
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
      }
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
              addresses: getAddress(options),
              billingAddresses: [0],
              shippingAddresses: [1],
              defaultBillingAddress: options.defaultBilling ? 0 : undefined,
              defaultShippingAddress: options.defaultShipping ? 1 : undefined,
            },
          })
          .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const checkToken = createAsyncThunk(
  'auth/checkToken',
  async function (_, { rejectWithValue }) {
    try {
      const result: ClientResponse<Project> = await getApiRootToken()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .get()
        .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuth(state) {
      return state;
    },
    removeAuth(state) {
      state.status = null;
      state.message = null;
      state.id = null;
      state.isAuth = false;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loginUser.pending, (state) => {
        authSlice.caseReducers.removeAuth(state);
      })
      .addCase(loginUserRegister.pending, (state) => {
        authSlice.caseReducers.removeAuth(state);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'ok';
        state.message = 'successfully';
        if (action.payload) {
          state.id = action.payload.body.customer.id;
          localStorage.setItem('id', state.id);
          state.isAuth = true;
        }
      })
      .addCase(loginUserRegister.fulfilled, (state, action) => {
        state.status = 'ok';
        state.message = 'successfully';
        if (action.payload) {
          state.id = action.payload.body.customer.id;
          localStorage.setItem('id', state.id);
          state.isAuth = true;
        }
      })
      .addCase(loginUserRegister.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
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
      })
      .addCase(checkToken.fulfilled, (state) => {
        state.isAuth = true;
      })
      .addCase(checkToken.rejected, (state) => {
        authSlice.caseReducers.removeAuth(state);
        localStorage.removeItem('token');
      });
  },
});

export const { getAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
