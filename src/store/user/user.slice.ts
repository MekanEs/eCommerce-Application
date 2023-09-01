import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FormFields } from '../../interfaces/formInputs';
import { ISliceUser } from '../../interfaces/sliceUser';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootToken } from '../../services/ClientBuilder';
import { store } from '../store';

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async function (_, { rejectWithValue }) {
    try {
      const result: ClientResponse<Customer> = await getApiRootToken()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .me()
        .get()
        .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const getNewPassword = createAsyncThunk(
  'user/getNewPassword',
  async function (data: FormFields, { rejectWithValue }) {
    try {
      const state: ISliceUser = store.getState().user;
      const result: ClientResponse<Customer> = await getApiRootToken()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .me()
        .password()
        .post({
          body: {
            version: state.version ? state.version : 1,
            currentPassword: data.password,
            newPassword: data.newPassword,
          },
        })
        .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

export const getNewDataUser = createAsyncThunk(
  'user/getNewDataUser',
  async function (data: FormFields, { rejectWithValue }) {
    try {
      const state = store.getState().user;
      const result = await getApiRootToken()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .me()
        .post({
          body: {
            version: state.version ? state.version : 1,
            actions: [
              {
                action: 'setLastName',
                lastName: data.lastName,
              },
              {
                action: 'setFirstName',
                firstName: data.firstName,
              },
              {
                action: 'setDateOfBirth',
                dateOfBirth: data.dateOfBirth,
              },
              {
                action: 'changeEmail',
                email: data.email,
              },
            ],
          },
        })
        .execute();
      return result;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);

const initialState: ISliceUser = {
  status: null,
  firstName: undefined,
  lastName: undefined,
  dateBirth: undefined,
  email: undefined,
  address: undefined,
  defaultBillingAddressId: undefined,
  defaultShippingAddressId: undefined,
  billingAddressIds: undefined,
  shippingAddressIds: undefined,
  message: null,
  version: undefined,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action) {
      const body: Customer | undefined = action.payload?.body;
      state.status = 'ok';
      state.firstName = body?.firstName;
      state.lastName = body?.lastName;
      state.email = body?.email;
      state.dateBirth = body?.dateOfBirth;
      state.address = body?.addresses;
      state.defaultBillingAddressId = body?.defaultBillingAddressId;
      state.defaultShippingAddressId = body?.defaultShippingAddressId;
      state.billingAddressIds = body?.billingAddressIds;
      state.shippingAddressIds = body?.shippingAddressIds;
      state.message = 'successfully';
      state.version = body?.version;
    },
    removeUser(state) {
      state.status = null;
      state.firstName = undefined;
      state.lastName = undefined;
      state.dateBirth = undefined;
      state.email = undefined;
      state.address = undefined;
      state.defaultBillingAddressId = undefined;
      state.defaultShippingAddressId = undefined;
      state.billingAddressIds = undefined;
      state.shippingAddressIds = undefined;
      state.message = null;
      state.version = undefined;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getUserData.pending, (state) => {
        userSlice.caseReducers.removeUser(state);
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        userSlice.caseReducers.getUser(state, action);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      })
      .addCase(getNewPassword.pending, (state) => {
        state.status = null;
        state.message = null;
      })
      .addCase(getNewPassword.fulfilled, (state, action) => {
        state.status = 'ok';
        state.message = 'successfully';
        state.version = action.payload?.body.version;
      })
      .addCase(getNewPassword.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      })
      .addCase(getNewDataUser.fulfilled, (state, action) => {
        userSlice.caseReducers.getUser(state, action);
      })
      .addCase(getNewDataUser.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
