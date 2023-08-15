import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateStreet from '../../validate/validateStreet';

export default function createBillingStreetInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="Street"
      type="text"
      id="billing-street"
      placeholder="Street"
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
