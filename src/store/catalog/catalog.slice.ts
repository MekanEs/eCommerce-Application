import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';

const initialState: {
  categories: { name: string; id: string }[] | undefined;
  products: null | unknown;
} = {
  categories: [],
  products: null,
};

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async function () {
    try {
      console.log('work');
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
      console.log('work');
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
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
      });
  },
});
export const { setCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
