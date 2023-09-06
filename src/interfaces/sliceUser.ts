import { Address } from '@commercetools/platform-sdk';

export interface ISliceUser {
  status: null | string;
  firstName: undefined | string;
  lastName: undefined | string;
  dateBirth: undefined | string;
  email: undefined | string;
  address: undefined | Address[];
  defaultBillingAddressId: undefined | string;
  defaultShippingAddressId: undefined | string;
  billingAddressIds: undefined | string[];
  shippingAddressIds: undefined | string[];
  message: null | string | unknown;
  version: undefined | number;
}
