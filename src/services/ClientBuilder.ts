import fetch from 'node-fetch';
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { CTP_API_URL, CTP_PROJECT_KEY } from '.';
import { getOptions } from './passwordFlow';
import { authMiddlewareOptions } from './authMiddleware';
import { authorization, options } from './withExistingTokenFlow';

const httpMiddlewareOptions = {
  host: CTP_API_URL,
  fetch,
};

export const getApiRootLogin = (email: string, password: string): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withPasswordFlow(getOptions(email, password))
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
  return createApiBuilderFromCtpClient(client);
};

export const getApiRootRegis = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
  return createApiBuilderFromCtpClient(client);
};

export const getApiRootToken = (): ApiRoot => {
  const client = new ClientBuilder()
    .withProjectKey(CTP_PROJECT_KEY)
    .withExistingTokenFlow(authorization(), options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
  return createApiBuilderFromCtpClient(client);
};
