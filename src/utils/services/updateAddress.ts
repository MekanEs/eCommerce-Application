import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';
import { FormAddress } from '../../interfaces/formInputs';
import { ISliceUser } from '../../interfaces/sliceUser';

export const getBodyUpdateAddress = (
  data: FormAddress[],
  state: ISliceUser,
): MyCustomerUpdateAction[] => {
  const response: MyCustomerUpdateAction[] = [];
  data.map((address, index) => {
    if (address === undefined && state.address?.[index] !== undefined)
      response.push({
        action: 'removeAddress',
        addressId: state.address?.[index].id,
      });
    if (address !== undefined && state.address?.[index] !== undefined)
      response.push({
        action: 'changeAddress',
        address: address,
        addressId: state.address?.[index].id,
      });
    if (address !== undefined && state.address?.[index] === undefined)
      response.push({ action: 'addAddress', address: address });
  });
  return response;
};
