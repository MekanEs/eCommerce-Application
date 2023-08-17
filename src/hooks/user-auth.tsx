import { useAppSelector } from './redux-hooks';

export function userAuth(): boolean {
  const { id } = useAppSelector((state) => state.user);
  console.log('user is logged', !!id);

  return !!id;
}
