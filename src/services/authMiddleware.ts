import {
  CTP_AUTH_URL,
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
  CTP_SCOPES,
} from '.';
import { AuthMiddlewareOptions } from '../types/auth';
import fetch from 'node-fetch';
import { AnonymTokenCache } from './tokenCache';
export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: CTP_AUTH_URL,
  projectKey: CTP_PROJECT_KEY,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes: [`${CTP_SCOPES}`],
  fetch,
};

export const AnonymAuthMiddlewareOptions = {
  host: CTP_AUTH_URL,
  projectKey: CTP_PROJECT_KEY,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes: [`${CTP_SCOPES}`],
  fetch,
  tokenCache: AnonymTokenCache,
};
