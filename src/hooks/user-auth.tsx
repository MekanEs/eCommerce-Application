import { useAppSelector } from './redux-hooks';

export function userAuth(): boolean {
  const { isAuth } = useAppSelector((state) => state.user);

  return !!isAuth;
}
