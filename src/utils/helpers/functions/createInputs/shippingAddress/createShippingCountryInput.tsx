import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingCountryInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
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
