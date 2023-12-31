import { createSlice } from '@reduxjs/toolkit';
import { categoryType } from '../../types/catalogTypes';

export type materialtype = {
  Aluminum: boolean;
  Carbon: boolean;
  Steel: boolean;
};

export type wheelSizeType = {
  '16\\"': boolean;
  '20\\"': boolean;
  '24\\"': boolean;
  '26\\"': boolean;
  '29\\"': boolean;
};

export interface IProductFilter {
  sort: { name: string; order: string };
  category: categoryType;
  priceRange: { from: number; to: number };
  stockRange: { from: number; to: number };
  materials: materialtype;
  wheelsize: wheelSizeType;
  offset: number;
  text: string;
}

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
      state.offset = 0;
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
      state.sort.order = action.payload;
      state.offset = 0;
    },
    setSorting(state, action) {
      state.sort.name = action.payload;
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
  setSorting,
  setMaterial,
  setWheelSize,
  setStockMin,
  setStockMax,
  setOffset,
  setText,
  resetState,
} = productFilterSlice.actions;
export default productFilterSlice.reducer;
