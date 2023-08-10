import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createBillingApartmentInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
  className: string,
): JSX.Element {
  return (
    <TextInput
      className={className}
      label="Apartment"
      type="text"
      id="billing-apartment"
      placeholder=""
      hookData={register('billingApartment', {})}
      errorMessage={
        errors && errors.billingApartment && errors.billingApartment?.message
      }
      isValid={!errors.billingApartment && dirtyFields?.billingApartment}
    />
  );
}
