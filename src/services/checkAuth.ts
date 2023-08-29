import { CTP_PROJECT_KEY } from '.';
import { getApiRootToken } from './ClientBuilder';

export const checkAuth = async () => {
  const response = await getApiRootToken()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .get()
    .execute();
};
