import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import SelectInput from '../../../../../components/inputs/selectInput';
import countries from '../../../../../utils/countries.json';

export default function createBillingCountryInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <SelectInput
      label="Country"
      id="billing-country"
      placeholder="Country"
      hookData={register('billingCountry', {})}
      isValid={!errors.billingCountry && dirtyFields?.billingCountry}
      options={countries}
    />
  );
}
