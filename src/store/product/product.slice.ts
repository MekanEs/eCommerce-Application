import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISliceProduct } from '../../interfaces/sliceProduct';
import { CTP_PROJECT_KEY } from '../../services';
import { RootState } from '../store';
import { Product } from '@commercetools/platform-sdk';
import { getApiRootRegis } from '../../services/ClientBuilder';

const initialState: ISliceProduct = {
  productData: null,
  currentRequestId: undefined,
};

export const fetchProductData = createAsyncThunk(
  'product/fetchProductData',
  async function (id: string) {
    const result = await getApiRootRegis()
      .withProjectKey({ projectKey: CTP_PROJECT_KEY })
      .products()
      .withKey({ key: id })
      .get({ queryArgs: { expand: 'masterData.current.categories[*]' } })
      .execute();
    return result.body;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.currentRequestId = action.meta.requestId;
      state.productData = action.payload;
    });
  },
});

export const selectProductData = (state: RootState): Product | null =>
  state.product.productData;
