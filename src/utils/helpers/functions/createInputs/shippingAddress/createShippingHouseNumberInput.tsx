import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingHouseNumberInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
  className: string,
): JSX.Element {
  return (
    <TextInput
      className={className}
      label="House"
      type="text"
      id="shipping-house-number"
      placeholder="№"
      hookData={register('shippingHouseNumber', {})}
      errorMessage={
        errors &&
        errors.shippingHouseNumber &&
        errors.shippingHouseNumber?.message
      }
      isValid={!errors.shippingHouseNumber && dirtyFields?.shippingHouseNumber}
    />
  );
}
