import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../../../interfaces/formInputs';
import Checkbox from '../../../../checkbox';

export default function createDefaultShipping(
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <Checkbox
      id={'set-default-shipping'}
      label={'Set as default shipping address'}
      hookData={register('defaultShipping', {})}
    />
  );
}
