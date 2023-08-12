import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingPostcodeInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

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
