import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validatePostcode from '../../../../utils/helpers/validate/validatePostcode/validatePostcode';

export default function createBillingPostcodeInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = form;

  return (
    <TextInput
      label="Postcode"
      type="text"
      id="billing-postcode"
      placeholder="Postcode"
      hookData={register('billingPostcode', {
        required: 'The field is required',
        validate: (value) =>
          validatePostcode(value, getValues('billingCountry')),
      })}
      errorMessage={
        errors && errors.billingPostcode && errors.billingPostcode?.message
      }
      isValid={!errors.billingPostcode && dirtyFields?.billingPostcode}
    />
  );
}
