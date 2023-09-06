import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../../../interfaces/formInputs';
import Checkbox from '../../../../checkbox';

export default function createDefaultBilling(
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <Checkbox
      id={'set-default-billing'}
      label={'Set as default billing address'}
      hookData={register('defaultBilling', {})}
    />
  );
}
