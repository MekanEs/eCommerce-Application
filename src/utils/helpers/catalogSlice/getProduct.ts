import { ProductProjection } from '@commercetools/platform-sdk';
import { productType } from '../../../types/catalogTypes';
import { getProductPrice } from './getPrice';

export const getProduct = (
  product: ProductProjection[],
): productType[] | undefined => {
  return product.map((el) => {
    return {
      name: Object.values(el.name)[0],
      id: el.id,
      atributes: el.masterVariant.attributes,
      key: el.masterVariant.key,
      categories: el.categories.map((category) => {
        if (category.obj) {
          return { id: category.id, name: category.obj?.name['en-US'] };
        }
        return { id: category.id, name: 'name' };
      }),
      images: el.masterVariant.images?.map((el) => el.url),
      price: getProductPrice(el.masterVariant.prices),
    };
  });
};
