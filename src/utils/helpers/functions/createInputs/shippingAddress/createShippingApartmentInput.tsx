import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingApartmentInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
  className: string,
): JSX.Element {
  return (
    <TextInput
      className={className}
      label="Apartment"
      type="text"
      id="shipping-apartment"
      placeholder=""
      hookData={register('shippingApartment', {})}
      errorMessage={
        errors && errors.shippingApartment && errors.shippingApartment?.message
      }
      isValid={!errors.shippingApartment && dirtyFields?.shippingApartment}
    />
  );
}
