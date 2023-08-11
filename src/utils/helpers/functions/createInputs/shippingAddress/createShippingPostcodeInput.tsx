import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingPostcodeInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
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
