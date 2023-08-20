import { UseFormReturn } from 'react-hook-form';
import { useEffect } from 'react';
import { FormFields } from '../../../../../interfaces/formInputs';
import SelectInput from '../../../../../components/inputs/selectInput';
import countries from '../../../../../utils/countries.json';

export default function createShippingCountryInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    watch,
  } = form;
  const shippingCountry = watch('shippingCountry');
  const errorMessage =
    errors && errors.shippingCountry && errors.shippingCountry?.message;
  const isValid =
    getValues('sameAddress') ||
    (!errorMessage && getValues('shippingCountry') === '');

  useEffect(() => {
    if (shippingCountry && dirtyFields?.shippingPostcode) {
      form.trigger('shippingPostcode');
    }
  }, [shippingCountry]);

  return (
    <SelectInput
      label="Country"
      id="shipping-country"
      placeholder="Country"
      hookData={register('shippingCountry', {
        required: 'The field is required',
      })}
      isValid={
        isValid
          ? undefined
          : !errors.shippingCountry && dirtyFields?.shippingCountry
      }
      errorMessage={errorMessage}
      options={countries}
    />
  );
}
