import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingPostcodeInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Postcode"
      type="text"
      id="billing-postcode"
      placeholder="Postcode"
      hookData={register('billingPostcode', {})}
      errorMessage={
        errors && errors.billingPostcode && errors.billingPostcode?.message
      }
      isValid={!errors.billingPostcode && dirtyFields?.billingPostcode}
    />
  );
}
