import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingApartmentInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
  className: string,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      className={className}
      label="Apartment"
      type="text"
      id="shipping-apartment"
      placeholder="№"
      hookData={register('shippingApartment', {})}
      errorMessage={
        errors && errors.shippingApartment && errors.shippingApartment?.message
      }
      isValid={!errors.shippingApartment && dirtyFields?.shippingApartment}
    />
  );
}
