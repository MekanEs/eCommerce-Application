import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';

export default function createShippingApartmentInput(
  form: UseFormReturn<FormFields>,
  className: string,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    watch,
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
      isValid={
        getValues('sameAddress') || watch('shippingApartment') === ''
          ? undefined
          : !errors.shippingApartment && dirtyFields?.shippingApartment
      }
    />
  );
}
