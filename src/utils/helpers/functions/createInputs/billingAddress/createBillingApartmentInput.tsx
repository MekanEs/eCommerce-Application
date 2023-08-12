import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingApartmentInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
  className: string,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      className={className}
      label="Apartment"
      type="text"
      id="billing-apartment"
      placeholder="№"
      hookData={register('billingApartment', {})}
      errorMessage={
        errors && errors.billingApartment && errors.billingApartment?.message
      }
      isValid={!errors.billingApartment && dirtyFields?.billingApartment}
    />
  );
}
