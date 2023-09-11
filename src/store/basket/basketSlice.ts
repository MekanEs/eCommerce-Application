import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getApiRootAnonym,
  getApiRootAnonymToken,
  getApiRootRegis,
  getApiRootToken,
} from '../../services/ClientBuilder';
import { CTP_PROJECT_KEY } from '../../services';
import { ApiRoot, Cart } from '@commercetools/platform-sdk';
import { getAnonymToken } from '../../utils/services/getToken';

const initialState: {
  basket: Cart | undefined;
  status: string;
} = {
  basket: undefined,
  status: 'fullfilled',
};
const anonymApiRoot = (): ApiRoot => {
  if (getAnonymToken()) {
    return getApiRootAnonymToken();
  } else {
    return getApiRootAnonym();
  }
};

export const getBasket = createAsyncThunk(
  'getBasket/basket',
  async function () {
    try {
      const result = await anonymApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .get()
        .execute();

      if (result.body.results.length === 0) {
        const result = await anonymApiRoot()
          .withProjectKey({
            projectKey: CTP_PROJECT_KEY,
          })
          .me()
          .carts()
          .post({
            body: {
              currency: 'USD',
              country: 'US',
            },
          })
          .execute();

        return result.body;
      }
      return result.body.results[0];
    } catch (e) {
      console.log(e);
    }
  },
);

export const getBasketUser = createAsyncThunk(
  'getBasketUser/basket',
  async function () {
    try {
      const result = await getApiRootToken()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .activeCart()
        .get()
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const addProductUser = createAsyncThunk(
  'addProductUser/basket',
  async function ({
    CartId,
    version,
    productID,
  }: {
    CartId: string;
    version: number;
    productID: string;
  }) {
    try {
      const result = await getApiRootToken()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .withId({ ID: CartId })
        .post({
          body: {
            version: version,
            actions: [
              {
                action: 'addLineItem',
                productId: productID,
              },
            ],
          },
        })
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const addProductAnonym = createAsyncThunk(
  'addProductAnonym/basket',
  async function ({
    CartId,
    version,
    productID,
  }: {
    CartId: string;
    version: number;
    productID: string;
  }) {
    try {
      const result = await anonymApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .withId({ ID: CartId })
        .post({
          body: {
            version: version,
            actions: [
              {
                action: 'addLineItem',
                productId: productID,
              },
            ],
          },
        })
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const deleteCart = createAsyncThunk(
  'deleteCart/basket',
  async function (id: string) {
    try {
      const result = await getApiRootRegis()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .carts()
        .withId({ ID: id })
        .delete({ queryArgs: { version: 1 } })
        .execute();
      return result;
    } catch (e) {
      console.log(e);
    }
  },
);

export const removeProduct = createAsyncThunk(
  'removeProduct/basket',

  async function ({
    CartId,
    version,
    productID,
  }: {
    CartId: string;
    version: number;
    productID: string;
  }) {
    try {
      const result = await getApiRootToken()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .withId({ ID: CartId })
        .post({
          body: {
            version: version,
            actions: [
              {
                action: 'removeLineItem',
                lineItemId: productID,
              },
            ],
          },
        })
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getBasket.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
      })
      .addCase(getBasketUser.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
      })
      .addCase(addProductUser.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(addProductUser.pending, (state, action) => {
        if (action.payload) state.status = 'pending';
      })
      .addCase(addProductAnonym.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(addProductAnonym.pending, (state, action) => {
        if (action.payload) state.status = 'pending';
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      });
  },
});

export default basketSlice.reducer;
