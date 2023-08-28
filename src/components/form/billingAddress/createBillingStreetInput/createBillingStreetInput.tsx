import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validateStreet from '../../../../utils/helpers/validate/validateStreet/validateStreet';

export default function createBillingStreetInput(
  form: UseFormReturn<FormFields>,
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
