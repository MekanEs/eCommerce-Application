import { UseFormRegister } from 'react-hook-form';
import Checkbox from '../../../../../../components/checkbox';
import { FormFields } from '../../../../../../interfaces/formInputs';

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
