import { BaseAddress } from '@commercetools/platform-sdk';
import { TokenCache } from '@commercetools/sdk-client-v2';
import fetch from 'node-fetch';

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
  addresses?: BaseAddress[];
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
  fetch?: typeof fetch;
};
