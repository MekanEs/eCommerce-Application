import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingCountryInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Country"
      type="text"
      id="billing-country"
      placeholder=""
      hookData={register('billingCountry', {})}
      errorMessage={
        errors && errors.billingCountry && errors.billingCountry?.message
      }
      isValid={!errors.billingCountry && dirtyFields?.billingCountry}
    />
  );
}
