import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateStreet from '../../validate/validateStreet';

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
      hookData={register('shippingStreet', {
        required: 'The field is required',
        validate: validateStreet,
      })}
      errorMessage={
        errors && errors.shippingStreet && errors.shippingStreet?.message
      }
      isValid={!errors.shippingStreet && dirtyFields?.shippingStreet}
    />
  );
}
