import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';
import { FormAddress } from '../../interfaces/formInputs';
import { ISliceUser } from '../../interfaces/sliceUser';

export const getBodyUpdateAddress = (
  data: FormAddress[],
  state: ISliceUser,
): MyCustomerUpdateAction[] => {
  const response: MyCustomerUpdateAction[] = [];
  const length = Object.keys(data).length;
  for (let index = 0; index <= length; index++) {
    if (
      data[index] === undefined &&
      state.address?.[index] !== undefined &&
      state.address?.[index].country !== ''
    )
      response.push({
        action: 'removeAddress',
        addressId: state.address?.[index].id,
      });
    if (
      data[index] !== undefined &&
      state.address?.[index] !== undefined &&
      state.address?.[index].country !== ''
    )
      response.push({
        action: 'changeAddress',
        address: data[index],
        addressId: state.address?.[index].id,
      });
    if (
      data[index] !== undefined &&
      state.address?.[index] !== undefined &&
      state.address?.[index].country === ''
    )
      response.push({ action: 'addAddress', address: data[index] });
  }
  console.log(response);
  return response;
};
