import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingCountryInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="Country"
      type="text"
      id="billing-country"
      placeholder="Country"
      hookData={register('billingCountry', {})}
      errorMessage={
        errors && errors.billingCountry && errors.billingCountry?.message
      }
      isValid={!errors.billingCountry && dirtyFields?.billingCountry}
    />
  );
}
