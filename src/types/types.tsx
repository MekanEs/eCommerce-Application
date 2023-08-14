import { BaseAddress } from '@commercetools/platform-sdk';

export type logUser = {
  email: string;
  password: string;
};

export type regUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  addresses: BaseAddress[];
};
