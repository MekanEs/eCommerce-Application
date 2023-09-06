import { getToken } from '../utils/services/getToken';

export type ExistingTokenMiddlewareOptions = {
  force?: boolean;
};

export const authorization = (): string => getToken();
export const options: ExistingTokenMiddlewareOptions = {
  force: true,
};
