import { createSlice } from '@reduxjs/toolkit';
import { categorytype } from '../../types/catalogTypes';
export type materialtype = {
  Aluminum: boolean;
  Carbon: boolean;
  Steel: boolean;
};
export type wheelSizetype = {
  '16\\"': boolean;
  '20\\"': boolean;
  '24\\"': boolean;
  '26\\"': boolean;
  '29\\"': boolean;
};
export type IProductFilter = {
  sort: { name: string; order: string };
  category: categorytype;
  priceRange: { from: number; to: number };
  stockRange: { from: number; to: number };
  materials: materialtype;
  wheelsize: wheelSizetype;
  offset: number;
  text: string | undefined;
};
const initialState: IProductFilter = {
  sort: { name: 'price', order: 'asc' },
  category: { name: 'All', id: undefined },
  priceRange: { from: 0, to: 10000 },
  stockRange: { from: 0, to: 50 },
  materials: { Aluminum: true, Carbon: true, Steel: true },
  wheelsize: {
    '16\\"': true,
    '20\\"': true,
    '24\\"': true,
    '26\\"': true,
    '29\\"': true,
  },
  offset: 0,
  text: '',
};
type querytype = {
  queryArgs: {
    fuzzy: boolean;
    fuzzyLevel?: number;
    filter?: string | string[] | undefined;
    sort?: string | string[] | undefined;
    offset: number;
    limit: number;
    'text.en-US': string | undefined;
  };
};

// eslint-disable-next-line max-lines-per-function
export function createQuery(state: IProductFilter): querytype {
  const createFilter = (): string[] => {
    const res = [];
    state.category.id && res.push(`categories.id:"${state.category.id}"`);
    res.push(
      `variants.price.centAmount:range (${state.priceRange.from * 100} to ${
        state.priceRange.to * 100
      })`,
    );
    res.push(
      `variants.attributes.stock:range (${state.stockRange.from} to ${state.stockRange.to})`,
    );
    const attributes = (obj: materialtype | wheelSizetype): string[] => {
      const res = [];
      for (const key in obj) {
        if (obj[key as keyof typeof obj] === true) {
          res.push(key);
        }
      }
      return res;
    };
    attributes(state.materials).length > 0 &&
      res.push(
        `variants.attributes.frameMaterial:"${attributes(state.materials).join(
          '","',
        )}"`,
      );
    attributes(state.wheelsize).length > 0 &&
      res.push(
        `variants.attributes.wheelSize:"${attributes(state.wheelsize).join(
          '","',
        )}"`,
      );
    return res;
  };
  const query: querytype = {
    queryArgs: {
      fuzzy: true,
      filter: createFilter(),
      sort: `${state.sort.name} ${state.sort.order}`,
      offset: state.offset,
      limit: 9,
      'text.en-US': state.text ? `"${state.text}"` : undefined,
    },
  };
  return query;
}

export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    resetState(state) {
      state.category = initialState.category;
      state.materials = initialState.materials;
      state.offset = initialState.offset;
      state.priceRange = initialState.priceRange;
      state.sort = initialState.sort;
      state.stockRange = initialState.stockRange;
      state.text = initialState.text;
      state.wheelsize = initialState.wheelsize;
    },
    setActiveCategory(state, action) {
      state.category = action.payload;
      state.offset = 0;
    },
    getState(state) {
      return state;
    },
    setPriceMin(state, action) {
      state.priceRange.from = action.payload;
      state.offset = 0;
    },
    setPriceMax(state, action) {
      state.priceRange.to = action.payload;
      state.offset = 0;
    },
    setStockMin(state, action) {
      state.stockRange.from = action.payload;
      state.offset = 0;
    },
    setStockMax(state, action) {
      state.stockRange.to = action.payload;
      state.offset = 0;
    },
    setOrder(state, action) {
      state.sort = action.payload;
      state.offset = 0;
    },
    setMaterial(state, action) {
      state.materials = action.payload;
      state.offset = 0;
    },

    setWheelSize(state, action) {
      state.wheelsize = action.payload;
      state.offset = 0;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  getState,
  setPriceMax,
  setPriceMin,
  setOrder,
  setMaterial,
  setWheelSize,
  setStockMin,
  setStockMax,
  setOffset,
  setText,
  resetState,
} = productFilterSlice.actions;
export default productFilterSlice.reducer;
