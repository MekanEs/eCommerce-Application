import { ISliceUser } from '../../../interfaces/sliceUser';

export const getDefaultAddress = (
  user: ISliceUser,
  id: string | undefined,
): number => {
  const index = user.address?.findIndex((elem) => elem.id === id);
  return index !== undefined ? index : -1;
};
