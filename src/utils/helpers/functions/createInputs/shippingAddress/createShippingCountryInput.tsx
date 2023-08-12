import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingCountryInput(
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
      id="shipping-country"
      placeholder="Country"
      hookData={register('shippingCountry', {})}
      errorMessage={
        errors && errors.shippingCountry && errors.shippingCountry?.message
      }
      isValid={!errors.shippingCountry && dirtyFields?.shippingCountry}
    />
  );
}
