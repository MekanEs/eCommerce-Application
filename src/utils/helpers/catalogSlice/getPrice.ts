import { Price } from '@commercetools/platform-sdk';
import { priceType } from '../../../types/catalogTypes';

export const getProductPrice = (
  price: Price[] | undefined,
): priceType | undefined => {
  return price?.map((el) => {
    return {
      value: el.value.centAmount,
      currencyCode: el.value.currencyCode,
      discount: el?.discounted && {
        value: el.discounted.value.centAmount,
        id: el.discounted.discount.id,
      },
    };
  })[0];
};
