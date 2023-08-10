import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingCityInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="City"
      type="text"
      id="shipping-city"
      placeholder=""
      hookData={register('shippingCity', {})}
      errorMessage={
        errors && errors.shippingCity && errors.shippingCity?.message
      }
      isValid={!errors.shippingCity && dirtyFields?.shippingCity}
    />
  );
}
