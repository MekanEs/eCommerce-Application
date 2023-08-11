import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateStreet from '../../validate/validateStreet';

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
      hookData={register('billingStreet', {
        required: 'The field is required',
        validate: validateStreet,
      })}
      errorMessage={
        errors && errors.billingStreet && errors.billingStreet?.message
      }
      isValid={!errors.billingStreet && dirtyFields?.billingStreet}
    />
  );
}
