import { CTP_PROJECT_KEY, getApiRoot } from './ClientBuilder';

export const registerUser = async (): Promise<void> => {
  const result = await getApiRoot()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .customers()
    .post({
      body: {
        email: '1qwert@mail.ru',
        password: '123qwer',
      },
    })
    .execute()
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  return result;
};

export const loginUser = async (): Promise<void> => {
  const result = await getApiRoot()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .login()
    .post({
      body: {
        email: '1qwert@mail.ru',
        password: '123qwer',
      },
    })
    .execute()
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  return result;
};
