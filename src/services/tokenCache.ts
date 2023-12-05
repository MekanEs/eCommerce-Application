import { TokenStore, type TokenCache } from '@commercetools/sdk-client-v2';

const tokenCache: TokenCache = {
  get: (): TokenStore => {
    const cacheTokenData = localStorage.getItem('token');
    if (cacheTokenData) {
      return {
        token: `Bearer: ${JSON.parse(cacheTokenData).token}`,
        expirationTime: 0,
        refreshToken: '',
      };
    }
    return { token: '', expirationTime: 0, refreshToken: '' };
  },
  set: (cache): void => {
    const cacheToken = localStorage.getItem('token');
    if (!cacheToken) localStorage.setItem('token', JSON.stringify(cache));
  },
};

export const AnonymTokenCache: TokenCache = {
  get: (): TokenStore => {
    const cacheTokenData = localStorage.getItem('Anonymtoken');
    if (cacheTokenData) {
      return {
        token: `Bearer: ${JSON.parse(cacheTokenData).token}`,
        expirationTime: 0,
        refreshToken: '',
      };
    }
    return { token: '', expirationTime: 0, refreshToken: '' };
  },
  set: (cache): void => {
    const cacheToken = localStorage.getItem('Anonymtoken');
    if (!cacheToken) localStorage.setItem('Anonymtoken', JSON.stringify(cache));
  },
};

export default tokenCache;
