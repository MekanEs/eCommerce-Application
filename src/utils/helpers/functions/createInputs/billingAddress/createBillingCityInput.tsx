import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateDefault from '../../validate/validateDefault';

export default function createBillingCityInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
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
