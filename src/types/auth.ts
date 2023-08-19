import { TokenCache } from '@commercetools/sdk-client-v2';

export type logUser = {
  email: string;
  password: string;
};

export type regUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  shippingCountry: string;
  billingCountry: string;
  shippingCity: string;
  billingCity: string;
  shippingStreet: string;
  billingStreet: string;
  shippingHouseNumber: string;
  billingHouseNumber: string;
  shippingApartment: string;
  billingApartment: string;
  shippingPostcode: string;
  billingPostcode: string;
  sameAddress: boolean;
  defaultBilling: boolean;
  defaultShipping: boolean;
};

export type PasswordAuthMiddlewareOptions = {
  host: string;
  projectKey: string;
  credentials: {
    clientId: string;
    clientSecret: string;
    user: {
      username: string;
      password: string;
    };
  };
  scopes?: Array<string>;
  tokenCache?: TokenCache;
  oauthUri?: string;
  fetch?: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response>;
};

export type AuthMiddlewareOptions = {
  host: string;
  projectKey: string;
  credentials: {
    clientId: string;
    clientSecret: string;
  };
  scopes?: Array<string>;
  fetch?: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response>;
};
