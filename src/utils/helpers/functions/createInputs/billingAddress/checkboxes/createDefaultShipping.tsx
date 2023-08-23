import { UseFormRegister } from 'react-hook-form';
import Checkbox from '../../../../../../components/checkbox';
import { FormFields } from '../../../../../../interfaces/formInputs';

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
