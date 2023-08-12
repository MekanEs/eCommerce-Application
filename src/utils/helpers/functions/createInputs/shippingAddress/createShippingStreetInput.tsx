import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateStreet from '../../validate/validateStreet';

export default function createShippingStreetInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="Street"
      type="text"
      id="shipping-street"
      placeholder="Street"
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
