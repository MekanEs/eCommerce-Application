import { ClientResponse, Project } from '@commercetools/platform-sdk';
import { CTP_PROJECT_KEY } from '.';
import { getApiRootToken } from './ClientBuilder';

export const checkAuth = async (): Promise<ClientResponse<Project>> => {
  const response = await getApiRootToken()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .get()
    .execute();
  return response;
};
