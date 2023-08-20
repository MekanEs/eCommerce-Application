import { UseFormRegister } from 'react-hook-form';
import Checkbox from '../../../../../../components/checkbox';
import { FormFields } from '../../../../../../interfaces/formInputs';

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
