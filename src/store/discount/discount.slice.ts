import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CTP_PROJECT_KEY } from '../../services';
import { getApiRootRegis } from '../../services/ClientBuilder';

const initialState: {
  activeCodes: {
    name: string | undefined;
    code: string | undefined;
    description: string | undefined;
    discountId: string | undefined;
  }[];
} = {
  activeCodes: [],
};

export const getDiscounts = createAsyncThunk(
  'discount/getDiscounts',
  async function () {
    try {
      const result = await getApiRootRegis()
        .withProjectKey({ projectKey: CTP_PROJECT_KEY })
        .discountCodes()
        .get()
        .execute();
      return result.body;
    } catch (error) {
      if (error instanceof Error) return null;
    }
  },
);
export const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getDiscounts.fulfilled, (state, action) => {
        if (action.payload?.results) {
          state.activeCodes = action.payload.results
            .filter((el) => el.isActive)
            .map((el) => {
              return {
                name: el.name && el.name['en-US'],
                code: el.code,
                description: el.description?.['en-US'],
                discountId: el.id,
              };
            });
        }
      })

      .addCase(getDiscounts.rejected, (state) => {
        state.activeCodes = [];
      });
  },
});
export default discountSlice.reducer;
