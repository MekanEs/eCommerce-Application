import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createShippingStreetInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Street"
      type="text"
      id="shipping-street"
      placeholder=""
      hookData={register('shippingStreet', {})}
      errorMessage={
        errors && errors.shippingStreet && errors.shippingStreet?.message
      }
      isValid={!errors.shippingStreet && dirtyFields?.shippingStreet}
    />
  );
}
