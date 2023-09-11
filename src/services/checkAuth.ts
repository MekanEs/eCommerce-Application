import { ClientResponse, Project } from '@commercetools/platform-sdk';
import { CTP_PROJECT_KEY } from '.';
import { getApiRootAnonymToken, getApiRootToken } from './ClientBuilder';
import { resetAnonymToken } from '../utils/services/getToken';

export const checkAuth = async (): Promise<ClientResponse<Project>> => {
  const response = await getApiRootToken()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .get()
    .execute();
  return response;
};

export const checkAnonymToken = async (): Promise<
  ClientResponse<Project> | undefined
> => {
  try {
    const response = await getApiRootAnonymToken()
      .withProjectKey({ projectKey: CTP_PROJECT_KEY })
      .get()
      .execute();
    return response;
  } catch (e) {
    resetAnonymToken();
  }
};
