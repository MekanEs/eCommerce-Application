import { useAppSelector } from './redux-hooks';

export function userAuth(): boolean {
  const { isAuth } = useAppSelector((state) => state.user);
  console.log('user is logged', isAuth);

  return !!isAuth;
}
