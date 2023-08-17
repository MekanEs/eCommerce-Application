import {
  CTP_AUTH_URL,
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
  CTP_SCOPES,
} from '.';

export const authMiddlewareOptions = {
  host: CTP_AUTH_URL,
  projectKey: CTP_PROJECT_KEY,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes: [`${CTP_SCOPES}`],
  fetch,
};