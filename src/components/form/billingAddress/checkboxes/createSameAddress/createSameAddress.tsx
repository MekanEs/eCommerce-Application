import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../../../interfaces/formInputs';
import Checkbox from '../../../../checkbox';

export default function createSameAddress(
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <Checkbox
      id={'set-same-address'}
      label={'Use the same address for both billing and shipping'}
      hookData={register('sameAddress', {})}
    />
  );
}
