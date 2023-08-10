import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingCityInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="City"
      type="text"
      id="billing-city"
      placeholder=""
      hookData={register('billingCity', {})}
      errorMessage={errors && errors.billingCity && errors.billingCity?.message}
      isValid={!errors.billingCity && dirtyFields?.billingCity}
    />
  );
}
