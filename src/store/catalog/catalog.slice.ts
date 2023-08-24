import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';

const initialState: {
  categories: { name: string; id: string }[] | undefined;
  activeCategory: { name: string; id: string };
  products: null | unknown;
} = {
  categories: [],
  activeCategory: { name: 'all', id: '1' },
  products: null,
};

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async function () {
    try {
      const result = await getApiRootRegis()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .productProjections()
        .get()
        .execute();
      return result.body.results;
    } catch (error) {
      if (error instanceof Error) return new Error('nothing works');
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
      return result.body.results.map((el) => {
        return { name: Object.values(el.name)[0], id: el.id };
      });
    } catch (error) {
      if (error instanceof Error) return [];
    }
  },
);
export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.products = action.payload.body.results;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, (state) => {
        state.products = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.categories = [];
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        const data = (action.payload && action.payload) || [];
        state.categories = [{ name: 'all', id: '1' }, ...data];
      })
      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
      });
  },
});
export const { setCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
