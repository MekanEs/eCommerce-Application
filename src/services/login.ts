import {
  ClientResponse,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import { useAppDispatch } from '../hooks/redux-hooks';
import { setUser } from '../store/user/auth.slice';
import { logUser } from '../types/types';
import { CTP_PROJECT_KEY, getApiRoot } from './ClientBuilder';

export const loginUser = async (options: logUser): Promise<void> => {
  const dispatch = useAppDispatch();
  await getApiRoot()
    .withProjectKey({ projectKey: CTP_PROJECT_KEY })
    .login()
    .post({
      body: {
        email: options.email,
        password: options.password,
      },
    })
    .execute()
    .then((res: ClientResponse<CustomerSignInResult>) => {
      dispatch(
        setUser({
          email: res.body.customer.email,
          id: res.body.customer.id,
          clientID: res.body.customer.id,
        }),
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
