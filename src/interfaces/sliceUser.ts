import { BaseAddress } from '@commercetools/platform-sdk';

export interface ISliceUser {
  firstName: null | string;
  lastName: null | string;
  dateBirth: null | string;
  email: null | string;
  address: null | BaseAddress[];
}
