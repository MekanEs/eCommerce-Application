import { getAnonymToken, getToken } from '../utils/services/getToken';

export type ExistingTokenMiddlewareOptions = {
  force?: boolean;
};

export const authorization = (): string => getToken();
export const anonymAuthorization = (): string => getAnonymToken();
export const options: ExistingTokenMiddlewareOptions = {
  force: true,
};
