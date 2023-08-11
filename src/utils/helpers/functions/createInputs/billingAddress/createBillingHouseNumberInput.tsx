import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingHouseNumberInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
  className: string,
): JSX.Element {
  return (
    <TextInput
      className={className}
      label="House number"
      type="text"
      id="billing-house-number"
      placeholder="№"
      hookData={register('billingHouseNumber', {})}
      errorMessage={
        errors &&
        errors.billingHouseNumber &&
        errors.billingHouseNumber?.message
      }
      isValid={!errors.billingHouseNumber && dirtyFields?.billingHouseNumber}
    />
  );
}
