import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingHouseNumberInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
  className: string,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
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
        getValues('sameAddress') || getValues('shippingHouseNumber') === ''
          ? undefined
          : !errors.shippingHouseNumber && dirtyFields?.shippingHouseNumber
      }
    />
  );
}
