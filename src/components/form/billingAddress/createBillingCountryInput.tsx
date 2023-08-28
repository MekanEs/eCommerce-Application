import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interfaces/formInputs';
import SelectInput from '../../inputs/selectInput';
import countries from '../../../utils/countries.json';

export default function createBillingCountryInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = form;

  const billingCountry = watch('billingCountry');

  useEffect(() => {
    if (billingCountry && dirtyFields?.billingPostcode) {
      form.trigger('billingPostcode');
    }
  }, [billingCountry]);

  return (
    <SelectInput
      label="Country"
      id="billing-country"
      placeholder="Country"
      hookData={register('billingCountry', {
        required: 'The field is required',
      })}
      isValid={!errors.billingCountry && dirtyFields?.billingCountry}
      errorMessage={
        errors && errors.billingCountry && errors.billingCountry?.message
      }
      options={countries}
    />
  );
}
