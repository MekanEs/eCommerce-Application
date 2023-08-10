import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingStreetInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Street"
      type="text"
      id="billing-street"
      placeholder=""
      hookData={register('billingStreet', {})}
      errorMessage={
        errors && errors.billingStreet && errors.billingStreet?.message
      }
      isValid={!errors.billingStreet && dirtyFields?.billingStreet}
    />
  );
}
