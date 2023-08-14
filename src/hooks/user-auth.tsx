import { useAppSelector } from './redux-hooks';

export function userAuth(): boolean {
  const { id } = useAppSelector((state) => state.user);
  return !!id;
}
