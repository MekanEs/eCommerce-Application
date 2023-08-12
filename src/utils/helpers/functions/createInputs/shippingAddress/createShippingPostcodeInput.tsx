import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingPostcodeInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="Postcode"
      type="text"
      id="shipping-postcode"
      placeholder="Postcode"
      hookData={register('shippingPostcode', {})}
      errorMessage={
        errors && errors.shippingPostcode && errors.shippingPostcode?.message
      }
      isValid={!errors.shippingPostcode && dirtyFields?.shippingPostcode}
    />
  );
}
