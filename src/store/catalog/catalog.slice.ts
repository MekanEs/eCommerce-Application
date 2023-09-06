import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';
import {
  categoryType,
  childCategoryType,
  productType,
} from '../../types/catalogTypes';
import { IProductFilter } from '../productFilter/productFilter.slice';
import { getProduct } from '../../utils/helpers/catalogSlice/getProduct';
import { getChildCategories } from '../../utils/helpers/catalogSlice/getChildCategories';
import { createQuery } from '../../utils/helpers/filterSlice/createQuery';

const initialState: {
  categories: categoryType[] | undefined;
  childCategory: childCategoryType;
  products: productType[] | undefined;
  total: number | undefined;
} = {
  categories: [],
  products: [],
  childCategory: [],
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
        .get({ queryArgs: { expand: 'ancestors[*]' } })
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
  extraReducers: (build) => {
    build
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.total = action.payload.total;
          state.products = getProduct(action.payload.results);
        }
      })

      .addCase(getProducts.rejected, (state) => {
        state.products = [];
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload) {
          state.categories = [
            { name: { n: 'All' }, id: undefined, ancestors: [] },
            ...action.payload,
          ]
            .filter((category) => category.ancestors.length === 0)
            .map((el) => {
              return { name: Object.values(el.name)[0], id: el.id };
            });
          state.childCategory = getChildCategories(action.payload);
        }
      })

      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
      });
  },
});

export default catalogSlice.reducer;
