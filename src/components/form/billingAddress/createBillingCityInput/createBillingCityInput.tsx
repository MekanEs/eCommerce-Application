import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validateDefault from '../../../../utils/helpers/validate/validateDefault/validateDefault';

export default function createBillingCityInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="City"
      type="text"
      id="billing-city"
      placeholder="City"
      hookData={register('billingCity', {
        required: 'The field is required',
        validate: validateDefault,
      })}
      errorMessage={errors && errors.billingCity && errors.billingCity?.message}
      isValid={!errors.billingCity && dirtyFields?.billingCity}
    />
  );
}
