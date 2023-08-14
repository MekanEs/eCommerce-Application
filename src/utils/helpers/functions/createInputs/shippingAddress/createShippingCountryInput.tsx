import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import SelectInput from '../../../../../components/inputs/selectInput';
import countries from '../../../../../utils/countries.json';

export default function createShippingCountryInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = form;

  return (
    <SelectInput
      label="Country"
      id="shipping-country"
      placeholder="Country"
      hookData={register('shippingCountry', {})}
      isValid={
        getValues('sameAddress') || getValues('shippingCountry') === ''
          ? undefined
          : !errors.shippingCountry && dirtyFields?.shippingCountry
      }
      options={countries}
    />
  );
}
