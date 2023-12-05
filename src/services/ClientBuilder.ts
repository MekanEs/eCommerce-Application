import fetch from 'node-fetch';
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { CTP_API_URL, CTP_PROJECT_KEY } from '.';
import { getOptions } from './passwordFlow';
import {
  AnonymAuthMiddlewareOptions,
  authMiddlewareOptions,
} from './authMiddleware';
import {
  anonymAuthorization,
  authorization,
  options,
} from './withExistingTokenFlow';

const httpMiddlewareOptions = {
  host: CTP_API_URL,
  fetch,
};

export const getApiRootLogin = (email: string, password: string): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withPasswordFlow(getOptions(email, password))
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
  return createApiBuilderFromCtpClient(client);
};

export const getApiRootRegis = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
  return createApiBuilderFromCtpClient(client);
};

export const getApiRootAnonym = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withAnonymousSessionFlow(AnonymAuthMiddlewareOptions)

    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
  return createApiBuilderFromCtpClient(client);
};
export const getApiRootAnonymToken = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withExistingTokenFlow(anonymAuthorization(), options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  return createApiBuilderFromCtpClient(client);
};

export const getApiRootToken = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withExistingTokenFlow(authorization(), options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
  return createApiBuilderFromCtpClient(client);
};
