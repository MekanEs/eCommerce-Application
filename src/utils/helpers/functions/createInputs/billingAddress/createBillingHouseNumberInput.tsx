import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingHouseNumberInput(
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
      id="billing-house-number"
      placeholder="№"
      hookData={register('billingHouseNumber', {})}
      errorMessage={
        errors &&
        errors.billingHouseNumber &&
        errors.billingHouseNumber?.message
      }
      isValid={
        getValues('billingHouseNumber') === ''
          ? undefined
          : !errors.billingHouseNumber && dirtyFields?.billingHouseNumber
      }
    />
  );
}
