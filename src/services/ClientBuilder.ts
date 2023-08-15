import fetch from 'node-fetch';
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { options } from '.';

export const CTP_PROJECT_KEY: string = 'ecommerce-app';
const CTP_CLIENT_SECRET: string = 'PIh5ln89z2SFeJR1wSAMVnJ3jc9OOCir';
const CTP_CLIENT_ID: string = 'nK6uRlvWHe5cKwrUjEIhsH5r';
const CTP_AUTH_URL: string = 'https://auth.us-central1.gcp.commercetools.com';
const CTP_API_URL: string = 'https://api.us-central1.gcp.commercetools.com';
const CTP_SCOPES: string =
  'view_categories:ecommerce-app manage_my_shopping_lists:ecommerce-app manage_payments:ecommerce-app manage_my_quote_requests:ecommerce-app manage_my_payments:ecommerce-app manage_my_quotes:ecommerce-app view_staged_quotes:ecommerce-app manage_my_orders:ecommerce-app view_published_products:ecommerce-app manage_my_profile:ecommerce-app manage_orders:ecommerce-app manage_my_business_units:ecommerce-app manage_customers:ecommerce-app view_products:ecommerce-app view_tax_categories:ecommerce-app view_cart_discounts:ecommerce-app view_project_settings:ecommerce-app view_shipping_methods:ecommerce-app create_anonymous_token:ecommerce-app view_shopping_lists:ecommerce-app view_messages:ecommerce-app';

const authMiddlewareOptions = {
  host: `${CTP_AUTH_URL}/oauth/token?grant_type=client_credentials?${CTP_SCOPES.split(
    ' ',
  ).join('&')}`,
  projectKey: CTP_PROJECT_KEY,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes: [],
  fetch,
};

const httpMiddlewareOptions = {
  host: CTP_API_URL,
  fetch,
};

const client = new ClientBuilder()
  .withPasswordFlow(options)
  .withProjectKey(CTP_PROJECT_KEY)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = (): ApiRoot => {
  return createApiBuilderFromCtpClient(client);
};
