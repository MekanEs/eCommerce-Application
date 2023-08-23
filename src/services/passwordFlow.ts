import {
  CTP_AUTH_URL,
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
  CTP_SCOPES,
} from '.';
import { PasswordAuthMiddlewareOptions } from '../types/auth';
import tokenCache from './tokenCache';
import fetch from 'node-fetch';

export const getOptions = (
  email: string,
  password: string,
): PasswordAuthMiddlewareOptions => {
  const options: PasswordAuthMiddlewareOptions = {
    host: CTP_AUTH_URL,
    projectKey: CTP_PROJECT_KEY,
    credentials: {
      clientId: CTP_CLIENT_ID,
      clientSecret: CTP_CLIENT_SECRET,
      user: {
        username: email,
        password: password,
      },
    },
    scopes: [`${CTP_SCOPES}`],
    fetch,
    tokenCache: tokenCache,
  };
  return options;
};
