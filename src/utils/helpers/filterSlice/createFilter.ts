import { IProductFilter } from '../../../store/productFilter/productFilter.slice';
import { getAttributes } from './getAttributes';

export const createFilter = (state: IProductFilter): string[] => {
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

  getAttributes(state.materials).length > 0 &&
    res.push(
      `variants.attributes.frameMaterial:"${getAttributes(state.materials).join(
        '","',
      )}"`,
    );
  getAttributes(state.wheelsize).length > 0 &&
    res.push(
      `variants.attributes.wheelSize:"${getAttributes(state.wheelsize).join(
        '","',
      )}"`,
    );
  return res;
};
