import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../../interfaces/formInputs';
import { TextInput } from '../../../../../components/inputs';
import validatePostcode from '../../validate/validatePostcode';

export default function createShippingPostcodeInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = form;

  const errorMessage =
    errors && errors.shippingPostcode && errors.shippingPostcode?.message;
  const isValid =
    getValues('sameAddress') ||
    (!errorMessage && getValues('shippingPostcode') === '');

  return (
    <TextInput
      label="Postcode"
      type="text"
      id="shipping-postcode"
      placeholder="Postcode"
      hookData={register('shippingPostcode', {
        required: 'The field is required',
        validate: (value) =>
          validatePostcode(value, getValues('shippingCountry')),
      })}
      errorMessage={errorMessage}
      isValid={
        isValid
          ? undefined
          : !errors.shippingPostcode && dirtyFields?.shippingPostcode
      }
    />
  );
}
