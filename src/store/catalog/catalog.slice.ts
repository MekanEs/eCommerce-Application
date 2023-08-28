import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';
import { categorytype, producttype } from '../../types/catalogTypes';
import {
  IProductFilter,
  createQuery,
} from '../productFilter/productFilter.slice';

const initialState: {
  categories: categorytype[] | undefined;
  products: producttype[] | undefined;
  total: number | undefined;
} = {
  categories: [],
  products: [],
  total: 0,
};

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async function (state: IProductFilter) {
    try {
      const query = createQuery(state);
      const result = await getApiRootRegis()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .productProjections()
        .search()
        .get(query)
        .execute();
      return result.body;
    } catch (error) {
      if (error instanceof Error) return null;
    }
  },
);

export const getCategories = createAsyncThunk(
  'catalog/getCategories',
  async function () {
    try {
      const result = await getApiRootRegis()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .categories()
        .get()
        .execute();
      return result.body.results;
    } catch (error) {
      if (error instanceof Error) return [];
    }
  },
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  // eslint-disable-next-line max-lines-per-function
  extraReducers: (build) => {
    build

      .addCase(getProducts.pending, (state) => {
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.total = action.payload.total;
          state.products = action.payload.results.map((el) => {
            return {
              name: Object.values(el.name)[0],
              id: el.id,
              atributes: el.masterVariant.attributes,
              categories:
                state.categories &&
                [...state.categories].filter(
                  (category) => category.id === el.categories[0].id,
                )[0],
              images: el.masterVariant.images?.map((el) => el.url),
              price: el.masterVariant.prices?.map((el) => {
                return {
                  value: el.value.centAmount,
                  currencyCode: el.value.currencyCode,
                  discount: el?.discounted && {
                    value: el.discounted.value.centAmount,
                    id: el.discounted.discount.id,
                  },
                };
              })[0],
            };
          });
        }
      })
      .addCase(getProducts.rejected, (state) => {
        state.products = [];
      })

      .addCase(getCategories.pending, (state) => {
        state.categories = [];
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload) {
          state.categories = [
            { name: { n: 'All' }, id: '' },
            ...action.payload,
          ].map((el) => {
            return { name: Object.values(el.name)[0], id: el.id };
          });
        }
      })
      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
      });
  },
});

export default catalogSlice.reducer;
