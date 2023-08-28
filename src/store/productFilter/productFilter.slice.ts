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
export interface IProductFilter {
  sort: string;
  category: categorytype;
  priceRange: { from: number; to: number };
  materials: materialtype;
  wheelsize: wheelSizetype;
}
const initialState: IProductFilter = {
  sort: 'asc',
  category: { name: 'All', id: undefined },
  priceRange: { from: 0, to: 10000 },
  materials: { Aluminum: true, Carbon: true, Steel: true },
  wheelsize: {
    '16\\"': true,
    '20\\"': true,
    '24\\"': true,
    '26\\"': true,
    '29\\"': true,
  },
};

// eslint-disable-next-line max-lines-per-function
export function createQuery(state: IProductFilter): {
  queryArgs: {
    fuzzy?: boolean | undefined;
    fuzzyLevel?: number | undefined;
    markMatchingVariants?: boolean | undefined;
    filter?: string | string[] | undefined;
    sort?: string | string[] | undefined;
  };
} {
  const createFilter = (): string[] => {
    const res = [];
    state.category.id && res.push(`categories.id:"${state.category.id}"`);
    res.push(
      `variants.price.centAmount:range (${state.priceRange.from * 100} to ${
        state.priceRange.to * 100
      })`,
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
  const query = {
    queryArgs: {
      filter: createFilter(),
      sort: `price ${state.sort}`,
    },
  };
  return query;
}

export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.category = action.payload;
    },
    getState(state) {
      return state;
    },
    setPriceMin(state, action) {
      state.priceRange.from = action.payload;
    },
    setPriceMax(state, action) {
      state.priceRange.to = action.payload;
    },
    setOrder(state, action) {
      state.sort = action.payload;
    },
    setAluminum(state, action) {
      state.materials.Aluminum = action.payload;
    },
    setCarbon(state, action) {
      state.materials.Carbon = action.payload;
    },
    setSteel(state, action) {
      state.materials.Steel = action.payload;
    },
    set16(state, action) {
      state.wheelsize['16\\"'] = action.payload;
    },
    set20(state, action) {
      state.wheelsize['20\\"'] = action.payload;
    },
    set24(state, action) {
      state.wheelsize['24\\"'] = action.payload;
    },
    set26(state, action) {
      state.wheelsize['26\\"'] = action.payload;
    },
    set29(state, action) {
      state.wheelsize['29\\"'] = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  getState,
  setPriceMax,
  setPriceMin,
  setOrder,
  setAluminum,
  setCarbon,
  setSteel,
  set16,
  set20,
  set24,
  set26,
  set29,
} = productFilterSlice.actions;
export default productFilterSlice.reducer;
