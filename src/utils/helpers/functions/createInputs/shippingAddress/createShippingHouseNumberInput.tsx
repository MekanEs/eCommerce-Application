import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../../interfaces/formInputs';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingHouseNumberInput(
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
      isValid={
        getValues('sameAddress') || watch('shippingHouseNumber') === ''
          ? undefined
          : !errors.shippingHouseNumber && dirtyFields?.shippingHouseNumber
      }
    />
  );
}
