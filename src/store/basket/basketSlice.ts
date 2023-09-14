import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getApiRootAnonym,
  getApiRootAnonymToken,
  getApiRootToken,
} from '../../services/ClientBuilder';
import { CTP_PROJECT_KEY } from '../../services';
import {
  ApiRoot,
  Cart,
  LineItem,
  MyCartUpdateAction,
} from '@commercetools/platform-sdk';
import { getAnonymToken, getToken } from '../../utils/services/getToken';

const initialState: {
  basket: Cart | undefined;
  status: string;
} = {
  basket: undefined,
  status: 'pending',
};

const getApiRoot = (): ApiRoot => {
  if (getToken()) {
    return getApiRootToken();
  } else {
    if (getAnonymToken()) {
      return getApiRootAnonymToken();
    } else {
      return getApiRootAnonym();
    }
  }
};

export const getBasket = createAsyncThunk(
  'getBasket/basket',
  async function () {
    try {
      const result = await getApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .get({
          queryArgs: {
            expand: 'masterData.current.img[*]',
          },
        })
        .execute();

      if (result.body.results.length === 0) {
        const result = await getApiRoot()
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
      const result = await getApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .activeCart()
        .get({
          queryArgs: {
            expand: 'masterData.current.img[*]',
          },
        })
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const updateQuantity = createAsyncThunk(
  'updateQuantity/basket',
  async function ({
    CartId,
    version,
    productID,
    quantity,
  }: {
    CartId: string;
    version: number;
    productID: string;
    quantity: number;
  }) {
    try {
      const result = await getApiRoot()
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
                action: 'changeLineItemQuantity',
                lineItemId: productID,
                quantity: quantity,
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

export const removeLineItem = createAsyncThunk(
  'removeLineItem/basket',
  async function ({
    CartId,
    version,
    lineItemID,
  }: {
    CartId: string;
    version: number;
    lineItemID: LineItem[];
  }) {
    try {
      const result = await getApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .withId({ ID: CartId })
        .post({
          body: {
            version: version,
            actions: lineItemID.map((el) => {
              return { action: 'removeLineItem', lineItemId: el.id };
            }),
          },
        })
        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const updateDiscount = createAsyncThunk(
  'updateDiscount/basket',
  async function ({
    CartId,
    version,

    action,
  }: {
    CartId: string;
    version: number;

    action: MyCartUpdateAction;
  }) {
    try {
      const result = await getApiRoot()
        .withProjectKey({
          projectKey: CTP_PROJECT_KEY,
        })
        .me()
        .carts()
        .withId({ ID: CartId })
        .post({
          body: {
            version: version,
            actions: [action],
          },
        })

        .execute();

      return result.body;
    } catch (e) {
      console.log(e);
    }
  },
);

export const addProduct = createAsyncThunk(
  'addProduct/basket',
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
      const result = await getApiRoot()
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

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getBasket.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })

      .addCase(getBasket.pending, (state, action) => {
        if (action.payload) state.status = 'pending';
      })
      .addCase(getBasketUser.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })

      .addCase(getBasketUser.pending, (state, action) => {
        if (action.payload) state.status = 'pending';
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(addProduct.pending, (state, action) => {
        if (action.payload) state.status = 'pending';
      })

      .addCase(updateQuantity.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(removeLineItem.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      })
      .addCase(updateDiscount.fulfilled, (state, action) => {
        if (action.payload) state.basket = action.payload;
        state.status = 'fullfilled';
      });
  },
});

export default basketSlice.reducer;
