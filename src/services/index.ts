import { TokenCache } from '@commercetools/sdk-client-v2';

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

export const options: PasswordAuthMiddlewareOptions = {
  host: 'https://auth.us-central1.gcp.commercetools.com',
  projectKey: 'ecommerce-app',
  credentials: {
    clientId: 'nK6uRlvWHe5cKwrUjEIhsH5r',
    clientSecret: 'PIh5ln89z2SFeJR1wSAMVnJ3jc9OOCir',
    user: {
      username: 'dwdwd@gmail.com',
      password: '1111rss',
    },
  },
  scopes: [`manage_project:ecommerce-app`],
  fetch,
};
