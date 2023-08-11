import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateDefault from '../../validate/validateDefault';

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
      placeholder="City"
      hookData={register('billingCity', {
        required: 'The field is required',
        validate: validateDefault,
      })}
      errorMessage={errors && errors.billingCity && errors.billingCity?.message}
      isValid={!errors.billingCity && dirtyFields?.billingCity}
    />
  );
}