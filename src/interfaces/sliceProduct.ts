import { Product } from '@commercetools/platform-sdk';

export interface ISliceProduct {
  productData: Product | null;
  currentRequestId: string | undefined;
}
