import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';
import { categorytype, producttype } from '../../types/catalogTypes';

const initialState: {
  categories: categorytype[] | undefined;
  activeCategory: categorytype;
  products: producttype[] | undefined;
} = {
  categories: [],
  activeCategory: { name: 'All', id: '' },
  products: [],
};

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async function (id?: string) {
    try {
      if (id !== '') {
        const result = await getApiRootRegis()
          .withProjectKey({ projectKey: CTP_PROJECT_KEY })
          .productProjections()
          .search()
          .get({
            queryArgs: {
              filter: `categories.id:"${id}"`,
            },
          })
          .execute();
        return result.body.results;
      } else {
        const result = await getApiRootRegis()
          .withProjectKey({ projectKey: CTP_PROJECT_KEY })
          .productProjections()
          .get()
          .execute();
        return result.body.results;
      }
    } catch (error) {
      if (error instanceof Error) return [];
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
  reducers: {
    setActiveCategories(state, action) {
      state.activeCategory = action.payload;
    },
  },
  // eslint-disable-next-line max-lines-per-function
  extraReducers: (build) => {
    build

      .addCase(getProducts.pending, (state) => {
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload.map((el) => {
            return {
              name: Object.values(el.name)[0],
              id: el.id,
              atributes: el.masterVariant.attributes,
              categories:
                state.categories &&
                [...state.categories].filter(
                  (category) => category.id === el.categories[0].id,
                ),
              images: el.masterVariant.images?.map((el) => el.url),
              prices: el.masterVariant.prices?.map((el) => {
                return {
                  value: el.value.centAmount,
                  currencyCode: el.value.currencyCode,
                  discount: el?.discounted && {
                    value: el.discounted.value.centAmount,
                    id: el.discounted.discount.id,
                  },
                };
              }),
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
export const { setActiveCategories } = catalogSlice.actions;
export default catalogSlice.reducer;
